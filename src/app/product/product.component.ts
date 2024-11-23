import { Component } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  priceMax!:number;
  Product:Product[]=[
    {id:1, title:'iphone 15',price:2500, quantity : 5, image:"../../assets/images/iphone1.jpg"},
    {id:2, title:'iphone 16' ,price:3000, quantity : 7, image:"../../assets/images/iphone2.jpg"},
    {id:3, title :'iphone14' ,price:3500, quantity :8, image: "../../assets/images/iphone3.jpg"}
     ]
      buy (id:number){
         this.Product.find(p=>p.id==id)!.quantity--;
      }
}
