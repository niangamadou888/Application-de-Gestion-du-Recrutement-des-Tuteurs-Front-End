import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {

  private apiURL = "https://application-de-gestion-du-recrutement.onrender.com/api";

  constructor(private http : HttpClient) { }

  // Récupérer toutes les années académiques
  getAnneesAcademiques(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/annee-academique`);
  }
  
  // Ajouter une nouvelle année académique
  ajouterAnneeAcademique(annee: any): Observable<any> {
    return this.http.post(`${this.apiURL}/annee-academique`, annee);
  }
  
  // Supprimer une année académique
  supprimerAnneeAcademique(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/annee-academique/${id}`);
  }
}

