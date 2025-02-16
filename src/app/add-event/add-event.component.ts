import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { EventService } from '../services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../model/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  formLogin!: FormGroup;
  id!: number;
  prod!: Event;

  constructor(private eventService: EventService, private router: Router, private act: ActivatedRoute) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec un validateur personnalisé pour les dates
    this.formLogin = new FormGroup(
      {
        id: new FormControl('', [Validators.required]),
        title: new FormControl('', [Validators.required, Validators.minLength(4)]),
        description: new FormControl('', [Validators.required, Validators.minLength(10)]),
        lieu: new FormControl('', [Validators.required, Validators.minLength(4)]),
        nbrMax: new FormControl('', [Validators.required, Validators.min(0)]),
        date: new FormControl('', [Validators.required]),
        disponible: new FormControl('', [Validators.required])
      },
      { validators: this.dateValidator } // Ajout du validateur personnalisé au groupe
    );

    // Récupérer l'ID du event s'il existe
    this.id = this.act.snapshot.params['id'];
    if (this.id) {
      this.eventService.getEventById(this.id).subscribe(data => {
        this.prod = data;
        this.formLogin.patchValue(this.prod); // Pré-remplir le formulaire
      });
    }
  }

  // Validateur personnalisé pour s'assurer que dateDebut < dateFin
  dateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const dateDebut = new Date(control.get('dateDebut')?.value);
    const dateFin = new Date(control.get('dateFin')?.value);

    if (dateDebut && dateFin && dateDebut >= dateFin) {
      return { dateInvalid: true }; // Retourne une erreur si dateDebut >= dateFin
    }
    return null; // Pas d'erreur
  }

  save(): void {
    if (this.formLogin.valid) {
      const event = this.formLogin.value ;

      if (this.id) {
        // Mise à jour
        this.eventService.updateEvent(event, this.id).subscribe(() => {
          this.router.navigateByUrl('/event');
        });
      } else {
        // Ajout
        this.eventService.addEvent(event).subscribe(() => {
          this.router.navigateByUrl('/event');
        });
      }
    }
  }
}
