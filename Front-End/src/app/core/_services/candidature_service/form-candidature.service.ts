import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormCandidatureService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com/api/candidatures";

  constructor(
    private http:HttpClient, private userAuthService: UserAuthService) { }

    onSubmit (
    candidature: any, 
    files: { cv?: File, LettreMotivation?: File, diplome?: File }, 
    userId: string, 
    annonceId: number
  ): Observable<any> {
  
    const token = this.userAuthService.getToken(); // Récupère le token depuis le service d'authentification

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    const formData = new FormData();
    
    // Ajouter les champs un par un 
    Object.keys(candidature).forEach(key => {
      formData.append(key, candidature[key]);
    });
    
    formData.append('userId', userId);
    formData.append('annonceId', annonceId.toString());

    if (files.cv) formData.append('cvFile', files.cv);
    if (files.LettreMotivation) formData.append('LettreMotivationFile', files.LettreMotivation);
    if (files.diplome) formData.append('diplomeFile', files.diplome);

    return this.http.post(`${this.apiURL}/${userId}/${annonceId}`, formData, { headers }) ;
  }
}
