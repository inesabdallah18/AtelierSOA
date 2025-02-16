import { Component } from '@angular/core';


import { Product } from '../model/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {


  constructor(private ps: ProductService) { }

  priceMax!: number;
  products: Product[] = []; // Liste des produits récupérée du service
  filteredProducts: Product[] = []; // Liste filtrée des produits
  searchQuery: string = ''; // Variable pour la recherche par titre

  ngOnInit() {
    this.ps.getAllProduct().subscribe(
      (data) => {
        this.products = data; // Charger tous les produits
        this.filteredProducts = data; // Initialiser la liste filtrée avec tous les produits
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }

}
