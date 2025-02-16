import { Component, OnInit } from '@angular/core';
import { LogementService } from '../services/logement.service';
import { Router } from '@angular/router';
import { Logement } from '../model/logement';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent implements OnInit {
  logements: Logement[] = [];  // Liste des logements

  constructor(
    private logementService: LogementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Typage explicite de l'objet state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state && (navigation.extras.state as { logements: Logement[] }).logements) {
      this.logements = (navigation.extras.state as { logements: Logement[] }).logements;
    } else {
      this.chargerLogements();  // Charger les logements depuis le backend si aucun 'state' n'est trouvé
    }
  }

  chargerLogements(): void {
    // Charger la liste des logements depuis le service
    this.logementService.getLogements().subscribe(
      (data) => {
        this.logements = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des logements', error);
      }
    );
  }

  // Suppression d'un logement
  supprimerLogement(reference: number): void {
    this.logementService.deleteLogement(reference).subscribe(
      () => {
        // Mettre à jour la liste après suppression
        this.chargerLogements();
      },
      (error) => {
        console.error('Erreur lors de la suppression du logement', error);
      }
    );
  }
}
