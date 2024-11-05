import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    color:string ='red';
  user=[
    {id:1, name:'John',age:25},
    {id:2, name:'Smith',age:30},
    {id:3, name:'John Smith',age:35},
  ]

  show(){
    alert('Hello');
  }
}
