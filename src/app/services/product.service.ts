import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Product:Product[]=[
    {id:1, title:'iphone 15',price:2500, quantity : 5, image:"../../assets/images/iphone1.jpg"},
    {id:2, title:'iphone 16' ,price:3000, quantity : 7, image:"../../assets/images/iphone2.jpg"},
    {id:3, title :'iphone14' ,price:3500, quantity :8, image: "../../assets/images/iphone3.jpg"}
     ]
  constructor() { }
}
