import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 api= 'http://localhost:3000/product';
 
  constructor(private http:HttpClient) { }



  getcalcul(list:any[],criteria:string, value:any){
      let nb=0
      for (let i in list){
        if (list[i][criteria]==value){
          nb++
        }
      }
      return nb
  }
getAllProduct():Observable<Product[]>{

  return this.http.get<Product[]>('http://localhost:3000/product')
}

getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(this.api +'/'+id);
}

addProduct(product: 
{ id: string; title: string; price: string; quantity: string; image: string }):
 Observable<any> {
  return this.http.post<any>(this.api, product);
}

deleteProduct(id: number): Observable<any> {
  return this.http.delete<any>(`${this.api}/${id}`);  // Suppression du produit via son ID
}

updateProduct(prod:Product,id:number): Observable<Product> {
  return this.http.put<Product>(this.api +'/'+id,prod); 
}




}



