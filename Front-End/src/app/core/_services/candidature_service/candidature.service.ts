import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  PATH_OF_API = "https://application-de-gestion-du-recrutement.onrender.com";

  constructor(
    private http: HttpClient,
    private userAuthService : UserAuthService
  ) { }

// Récupérer toutes les candidatures d'un candidat donné
getCandidaturesByUserId(userId: string): Observable<any> {
  const token = this.userAuthService.getToken();
          const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get(`${this.PATH_OF_API}/api/candidatures/user/${userId}`, {headers});
}


getCandidaturesByAnnonceId(annonceId: number): Observable<any[]> {
  const token = this.userAuthService.getToken();
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<any[]>(`${this.PATH_OF_API}/api/candidatures/annonce/${annonceId}`,{headers});
}

}
