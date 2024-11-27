import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent {
  id!:number
  product!:Product
      constructor(private  act: ActivatedRoute, private ps : ProductService){}

  ngOnInit(){
    this.id=this.act.snapshot.params['id'];
    this.product=this.ps.Product.find(p=>p.id==this.id)!;

  }

}
