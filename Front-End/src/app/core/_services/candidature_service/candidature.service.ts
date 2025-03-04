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
getCandidatures(userId: string): Observable<any> {
  return this.http.get<any[]>(`${this.PATH_OF_API}/api/candidatures/${userId}`);
}

}
