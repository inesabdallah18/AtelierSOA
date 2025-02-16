import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement } from '../model/logement'; 
@Injectable({
  providedIn: 'root'
})
export class LogementService {
  private apiUrl = 'http://localhost:7777/LogementRendezVous_Etudiant_war_exploded/api/logement/getAll';
  private deleteUrl = 'http://localhost:7777/LogementRendezVous_Etudiant_war_exploded/api/logement/delete';  // L'URL pour supprimer un logement
  private addUrl = 'http://localhost:7777/LogementRendezVous_Etudiant_war_exploded/api/logement/add';  // URL pour ajouter un logement
  constructor(private http: HttpClient) { }

  getLogements(): Observable<Logement[]> {
    return this.http.get<Logement[]>(this.apiUrl);
  }


    // Méthode pour supprimer un logement par ID
    deleteLogement(reference: number): Observable<any> {
      return this.http.delete(`${this.deleteUrl}/${reference}`);
    }

  // Méthode pour ajouter un logement
  addLogement(logement: Logement): Observable<Logement> {
    return this.http.post<Logement>(this.addUrl, logement);
  }
  

}
