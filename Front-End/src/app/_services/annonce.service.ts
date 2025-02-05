import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com";

  //injecte HttpClient pour pouvoir effectuer des requêtes HTTP
  constructor (private http: HttpClient){ }

  // Méthode pour Récupére la liste des annonces depuis l'API
  getAnnonces(): Observable<any[]> {
    return this.http.get<any[]>('${this.apiURL}/api/annonces');
  }

}
