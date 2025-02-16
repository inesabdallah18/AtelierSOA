import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductComponent } from './product/product.component';

import { NotFoundComponent } from './not-found/not-found.component';

 
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TaskComponent } from './task/task.component';
import { CampingComponent } from './camping/camping.component';
import { EventComponent } from './event/event.component';
import { AddCampingComponent } from './add-camping/add-camping.component';
import { AddEventComponent } from './add-event/add-event.component';
import { LogementComponent } from './logement/logement.component';
import { AddLogementComponent} from './add-logement/add-logement.component';

const routes: Routes = [
  {path:'', redirectTo:'/product', pathMatch:'full'},
  
  

  {path:'product', component:ProductComponent},
  {path:'add-product', component:AddProductComponent},
  {path:'task', component:TaskComponent},
  {path:'add-logement', component:AddLogementComponent},
 
  {path:'logement', component:LogementComponent},

  {path:'update/:id', component:AddProductComponent},
  {path:'updatee/:id', component:AddCampingComponent},
  {path:'updateee/:id', component:AddEventComponent},


  
  {path:'detail/:id', component:DetailProductComponent},
   
  {path:'camping', component:CampingComponent},
  {path:'event', component:EventComponent},
    
  {path:'add-camping', component:AddCampingComponent},
  {path:'add-event', component:AddEventComponent},







  {path : '**' , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
