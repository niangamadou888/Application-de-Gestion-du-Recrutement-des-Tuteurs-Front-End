import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCandidatureService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com/api/candidatures";

  constructor(
    private http:HttpClient) { }

    onSubmit (
    candidature: any, 
    files: { cv?: File, LettreMotivation?: File, diplome?: File }, 
    userId: string, 
    annonceId: number
  ): Observable<any> {
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

    return this.http.post(`${this.apiURL}`, formData);
  }
}
