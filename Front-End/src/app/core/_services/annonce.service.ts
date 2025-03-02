import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com";

  //injecte HttpClient pour pouvoir effectuer des requêtes HTTP
  constructor (private http: HttpClient, private userAuthService: UserAuthService){ }

  // Méthode pour Récupére la liste des annonces depuis l'API
  getAnnonces(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiURL}/api/annonces`);
  }

  ajouterAnnonce(annonce: any): Observable<any> {
    const token = this.userAuthService.getToken();
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiURL}/api/annonces`, annonce, { headers });
  }

  supprimerAnnonce(annonce: any): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/api/annonces`, annonce);
  }

}

