import { Injectable } from '@angular/core';
import { Event} from '../model/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

 api= 'http://localhost:3000/event';
 
  constructor(private http:HttpClient) { }



  getcalcul(list:any[],criteria:string, value:any){
      let nb=0
      for (let i in list){
        if (list[i][criteria]==value){
          nb++
        }
      }
      return nb
  }
getAllEvent():Observable<Event[]>{

  return this.http.get<Event[]>('http://localhost:3000/event')
}

getEventById(id: number): Observable<Event> {
  return this.http.get<Event>(this.api +'/'+id);
}

addEvent(event: 
{ id: string; title: string; price: string; quantity: string; image: string }):
 Observable<any> {
  return this.http.post<any>(this.api, event);
}

deleteEvent(id: number): Observable<any> {
  return this.http.delete<any>(`${this.api}/${id}`);  // Suppression du produit via son ID
}

updateEvent(prod:Event,id:number): Observable<Event> {
  return this.http.put<Event>(this.api +'/'+id,prod); 
}


}
