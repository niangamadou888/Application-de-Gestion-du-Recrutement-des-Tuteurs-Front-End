import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCandidatureService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com";

  constructor(
    private http:HttpClient) { }

    onSubmit (
    candidature: any, 
    files: { cv?: File, motivation?: File, diplome?: File }, 
    userId: string, 
    annonceId: number
  ): Observable<any> {
    const formData = new FormData();

    formData.append('candidature', new Blob([JSON.stringify(candidature)], { type: 'application/json' }));
    formData.append('userId', userId);
    formData.append('annonceId', annonceId.toString());

    if (files.cv) formData.append('cvFile', files.cv);
    if (files.motivation) formData.append('motivationFile', files.motivation);
    if (files.diplome) formData.append('diplomeFile', files.diplome);

    return this.http.post(`${this.apiURL}/soumettre`, formData);
  }
}
