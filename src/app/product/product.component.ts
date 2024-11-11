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
    {id:1, title:'iphone 15',price:2500, quantity : 5, image:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone13pro_09142021_big.jpg.large.jpg"},
    {id:2, title:'iphone 16' ,price:3000, quantity : 7, image:""},
    {id:3, title :'iphone14' ,price:3500, quantity :8, image: ""}
     ]
      buy (id:number){
         this.Product.find(p=>p.id==id)!.quantity--;
      }
}
