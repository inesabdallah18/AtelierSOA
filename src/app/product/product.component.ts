import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private ps: ProductService) { }

  priceMax!: number;
  products: Product[] = []; // Liste des produits récupérée du service
  filteredProducts: Product[] = []; // Liste filtrée des produits
  searchQuery: string = ''; // Variable pour la recherche par titre
  titleEmployeeCount: number = 0;


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



  // Méthode pour supprimer un produit
  deleteProduct(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.ps.deleteProduct(id).subscribe(
        () => {
          this.products = this.products.filter(p => p.id !== id);
          this.filteredProducts = this.filteredProducts.filter(p => p.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du produit', error);
        }
      );
    }
  }

  // Méthode de recherche par titre
  onSearch() {
    this.filteredProducts = this.products.filter((product) =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

    // Méthode pour gérer l'achat d'un produit
    buy(id: number) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        product.quantity--;
      }
    }
  
    // Méthode pour calculer les stocks
    getStock() {
      return this.ps.getcalcul(this.products, 'quantity', 0);
    }

  // Méthode pour calculer le nombre de produits avec le title "titleemployee"
  calculateTitleEmployee() {
    this.titleEmployeeCount = this.products.filter(product => product.title === 'titleemployee').length;
  }
}
