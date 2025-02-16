import { Component, OnInit } from '@angular/core';
import { LogementService } from '../services/logement.service'; // Assure-toi d'importer ton service
import { Router } from '@angular/router';
import { Logement } from '../model/logement'; // Assure-toi d'importer le modèle Logement
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import du FormBuilder et Validators

@Component({
  selector: 'app-add-logement',
  templateUrl: './add-logement.component.html',
  styleUrls: ['./add-logement.component.css']
})
export class AddLogementComponent implements OnInit {
  logements: Logement[] = [];  // Déclaration de la propriété logements
  logementForm: FormGroup;  // Déclare le formulaire avec FormGroup

  constructor(
    private logementService: LogementService,
    private router: Router,
    private fb: FormBuilder // Injection de FormBuilder
  ) {
    // Initialisation du formulaire directement dans le constructeur
    this.logementForm = this.fb.group({
      reference: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      adresse: [null, Validators.required],
      delegation: [null, Validators.required],
      gouvernorat: [null, Validators.required],
      type: [null, Validators.required],
      description: [null, Validators.required],
      prix: [null, [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  ngOnInit(): void {
    // On charge initialement les logements existants depuis le backend
    this.loadLogements();
  }

  loadLogements(): void {
    this.logementService.getLogements().subscribe(
      (logements) => {
        this.logements = logements;  // Met à jour la liste des logements
        console.log('Logements chargés:', this.logements);
      },
      (error) => {
        console.error('Erreur lors de la récupération des logements', error);
      }
    );
  }

  onSubmit(): void {
    if (this.logementForm.invalid) {
      console.log('Le formulaire est invalide');
      return;
    }

    const newLogement: Logement = {
      reference: Number(this.logementForm.value.reference),
      adresse: this.logementForm.value.adresse,
      delegation: this.logementForm.value.delegation,
      gouvernorat: this.logementForm.value.gouvernorat,
      type: this.logementForm.value.type,
      description: this.logementForm.value.description,
      prix: Number(this.logementForm.value.prix)
    };

    console.log('Données du logement à envoyer:', newLogement);

    this.logementService.addLogement(newLogement).subscribe(
      (response) => {
        console.log('Réponse du serveur:', response);

        // Ajouter immédiatement le nouveau logement à la liste des logements
        this.logements.push(response); // On ajoute la réponse directement à la liste

        // Redirection vers la liste des logements sans recharger la liste du backend
        this.router.navigate(['/logement'], { state: { logements: this.logements } });  // Passe la liste mise à jour via state
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du logement', error);
      }
    );
  }
}
