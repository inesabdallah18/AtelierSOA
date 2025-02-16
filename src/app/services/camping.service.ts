import { Injectable } from '@angular/core';
import { Camping} from '../model/camping';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CampingService {
 api= 'http://localhost:3000/camping';
 
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
getAllCamping():Observable<Camping[]>{

  return this.http.get<Camping[]>('http://localhost:3000/camping')
}

getCampingById(id: number): Observable<Camping> {
  return this.http.get<Camping>(this.api +'/'+id);
}

addCamping(camping: 
{ id: string; title: string; price: string; quantity: string; image: string }):
 Observable<any> {
  return this.http.post<any>(this.api, camping);
}

deleteCamping(id: number): Observable<any> {
  return this.http.delete<any>(`${this.api}/${id}`);  // Suppression du produit via son ID
}

updateCamping(prod:Camping,id:number): Observable<Camping> {
  return this.http.put<Camping>(this.api +'/'+id,prod); 
}




}



