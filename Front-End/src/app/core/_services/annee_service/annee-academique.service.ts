import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';  // Import the Auth Service

@Injectable({
  providedIn: 'root'
})
export class AnneeAcademiqueService {

  private apiURL = "https://application-de-gestion-du-recrutement.onrender.com";

  constructor(private http: HttpClient, private userAuthService: UserAuthService) { }

  // Récupérer toutes les années académiques
  getAnneesAcademiques(): Observable<any[]> {
    const token = this.userAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any[]>(`${this.apiURL}/api/annee-academique`, { headers });
  }

  // Ajouter une nouvelle année académique
  ajouterAnneeAcademique(annee: any): Observable<any> {
    const token = this.userAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiURL}/annee-academique`, annee, { headers });
  }

  // Supprimer une année académique
  supprimerAnneeAcademique(id: string): Observable<any> {
    const token = this.userAuthService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.delete(`${this.apiURL}/annee-academique/${id}`, { headers });
  }
}
