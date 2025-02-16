import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';



import { AddProductComponent } from './add-product/add-product.component';

import { DetailProductComponent } from './detail-product/detail-product.component';
import { TaskComponent } from './task/task.component';
import { TestComponent } from './test/test.component';
import { CampingComponent } from './camping/camping.component';
import { AddCampingComponent } from './add-camping/add-camping.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventComponent } from './event/event.component';
import { LogementComponent } from './logement/logement.component';
import { AddLogementComponent } from './add-logement/add-logement.component';




@NgModule({
  declarations: [
    AppComponent,
 
    ProductComponent,
   
    NavbarComponent,
    NotFoundComponent,
  
    AddProductComponent,
   
    DetailProductComponent,
         TaskComponent,
         TestComponent,
         CampingComponent,
         AddCampingComponent,
         AddEventComponent,
         EventComponent,
         LogementComponent,
         AddLogementComponent,
 
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
