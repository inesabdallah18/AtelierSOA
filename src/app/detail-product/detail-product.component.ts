import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  id!: number;
  product!: Product;

  constructor(private act: ActivatedRoute, private ps: ProductService) {}

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
    this.ps.getProductById(this.id).subscribe(
      (data) => {
        this.product = data;
      }
    );
  }

  // Méthode pour changer le titre
  changeTitle() {
    if (this.product && this.product.title) {
      this.product.title = 'Title Changed';  // Met à jour le titre en 'Title Changed'
    }
  }
}
