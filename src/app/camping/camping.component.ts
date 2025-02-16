import { Component } from '@angular/core';
import { Camping } from '../model/camping';
import { CampingService } from '../services/camping.service';
@Component({
  selector: 'app-camping',
  templateUrl: './camping.component.html',
  styleUrls: ['./camping.component.css']
})
export class CampingComponent {
constructor(private ps: CampingService) { }

  priceMax!: number;
  campings: Camping[] = []; // Liste des produits récupérée du service
  filteredCampings: Camping[] = []; // Liste filtrée des produits
  searchQuery: string = ''; // Variable pour la recherche par titre
  titleEmployeeCount: number = 0;


  ngOnInit() {
    this.ps.getAllCamping().subscribe(
      (data) => {
        this.campings = data; // Charger tous les produits
        this.filteredCampings = data; // Initialiser la liste filtrée avec tous les produits
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }



  // Méthode pour supprimer un produit
  deleteCamping(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.ps.deleteCamping(id).subscribe(
        () => {
          this.campings = this.campings.filter(p => p.id !== id);
          this.filteredCampings = this.filteredCampings.filter(p => p.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du produit', error);
        }
      );
    }
  }


}
