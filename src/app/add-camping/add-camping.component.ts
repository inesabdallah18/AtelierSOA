import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { CampingService } from '../services/camping.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Camping } from '../model/camping';

@Component({
  selector: 'app-add-camping',
  templateUrl: './add-camping.component.html',
  styleUrls: ['./add-camping.component.css']
})
export class AddCampingComponent implements OnInit {
  formLogin!: FormGroup;
  id!: number;
  prod!: Camping;

  constructor(private campingService: CampingService, private router: Router, private act: ActivatedRoute) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec un validateur personnalisé pour les dates
    this.formLogin = new FormGroup(
      {
        id: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required, Validators.minLength(4)]),
        nbPlace: new FormControl('', [Validators.required, Validators.min(0)]),
        dateDebut: new FormControl('', [Validators.required]),
        dateFin: new FormControl('', [Validators.required]),
        etat: new FormControl(true, [Validators.required])
      },
      { validators: this.dateValidator } // Ajout du validateur personnalisé au groupe
    );

    // Récupérer l'ID du camping s'il existe
    this.id = this.act.snapshot.params['id'];
    if (this.id) {
      this.campingService.getCampingById(this.id).subscribe(data => {
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
      const camping = this.formLogin.value ;

      if (this.id) {
        // Mise à jour
        this.campingService.updateCamping(camping, this.id).subscribe(() => {
          this.router.navigateByUrl('/camping');
        });
      } else {
        // Ajout
        this.campingService.addCamping(camping).subscribe(() => {
          this.router.navigateByUrl('/camping');
        });
      }
    }
  }
}
