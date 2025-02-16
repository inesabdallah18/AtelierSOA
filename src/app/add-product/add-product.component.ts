import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  formLogin!: FormGroup;  // L'opérateur "!" indique que la propriété sera initialisée dans ngOnInit()
  id!:number
  prod !:Product
  constructor(private productService: ProductService, private router: Router, private act:ActivatedRoute) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec les validations

    this.formLogin = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      quantity: new FormControl('', [
        Validators.required, // Champ obligatoire
        Validators.minLength(6), // Minimum 6 caractères
        Validators.pattern('^[A-Z].*') ]),// Premier caractère majuscule,
      image: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.id=this.act.snapshot.params['id']
    this.productService.getProductById(this.id).subscribe
    (data=>{this.prod=data
      console.log(this.prod)
      this.formLogin.patchValue(this.prod as any)
  })

  }

  

  save(): void {
    if (this.formLogin.valid) {
      if (this.id){
     this.productService.updateProduct(this.formLogin.value as any,this.id).subscribe
   (()=>this.router.navigateByUrl("/product"))
  }else{
    
      // Si le formulaire est valide, on récupère les données et on appelle la méthode de service pour l'ajouter
      const product = this.formLogin.value;

      this.productService.addProduct(product).subscribe(
        (response) => {
          // Si la requête est réussie, on redirige l'utilisateur vers la liste des produits
          this.router.navigateByUrl('/product');
        },
        (error) => {
          // Gestion des erreurs si la requête échoue
          console.error('Erreur lors de l\'ajout du produit:', error);
        }
      );
    }
  }
}}
