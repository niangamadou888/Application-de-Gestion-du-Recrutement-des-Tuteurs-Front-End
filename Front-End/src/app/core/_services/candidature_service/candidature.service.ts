import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {

  PATH_OF_API = "https://application-de-gestion-du-recrutement.onrender.com/api/candidatures";

  constructor(
    private http: HttpClient
  ) { }

// Récupérer toutes les candidatures d'un candidat donné
getCandidatures(userId: string): Observable<any> {
  return this.http.get(`${this.PATH_OF_API}/candidatures/candidat/${userId}`);
}

}
