import { Component } from '@angular/core';
import { Event } from '../model/event';
import { EventService } from '../services/event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
constructor(private ps: EventService) { }

  priceMax!: number;
  events: Event[] = []; // Liste des produits récupérée du service
  filteredEvents: Event[] = []; // Liste filtrée des produits
  searchQuery: string = ''; // Variable pour la recherche par titre
  titleEmployeeCount: number = 0;


  ngOnInit() {
    this.ps.getAllEvent().subscribe(
      (data) => {
        this.events = data; // Charger tous les produits
        this.filteredEvents = data; // Initialiser la liste filtrée avec tous les produits
      },
      (error) => {
        console.error('Erreur lors du chargement des produits', error);
      }
    );
  }



  // Méthode pour supprimer un produit
  deleteEvent(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      this.ps.deleteEvent(id).subscribe(
        () => {
          this.events = this.events.filter(p => p.id !== id);
          this.filteredEvents = this.filteredEvents.filter(p => p.id !== id);
        },
        (error) => {
          console.error('Erreur lors de la suppression du produit', error);
        }
      );
    }
  }
  // Méthode pour calculer le nombre de produits avec le title "titleemployee"
  calculateTitleEmployee() {
    this.titleEmployeeCount = this.events.filter(event => event.disponible === true).length;
  }

  onSearch() {
    if (!this.searchQuery) {
      this.filteredEvents = [...this.events]; // Restaurer la liste complète si la recherche est vide
    } else {
      this.filteredEvents = this.events.filter((event) =>
        event.lieu.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

}
