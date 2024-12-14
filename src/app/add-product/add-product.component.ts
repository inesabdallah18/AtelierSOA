import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productservice:ProductService,private router:Router){}
  formLogin =  new FormGroup({
    id : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required,Validators.minLength(4)]),
    price : new FormControl('',[Validators.required,Validators.min(0) ]),
    quantity : new FormControl('',[Validators.required,Validators.min(0)] ),
    image : new FormControl ('',[Validators.required, Validators.minLength(8)]),
   })

   add(){
this.productservice.Product.push(this.formLogin.value as any)
this.router.navigateByUrl("/product")
   }
}
