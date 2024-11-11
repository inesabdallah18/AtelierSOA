import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  priceMax!:number;
  Product=[
    {id:1, title:'iphone 15',price:2500, quantity : 5},
    {id:2, title:'iphone 16' ,price:3000, quantity : 7},
    {id:3, title :'iphone14' ,price:3500, quantity :8}
     ]
      buy (id:number){
         this.Product.find(p=>p.id==id)!.quantity--;
      }
}
