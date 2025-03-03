import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class FormCandidatureService {

  private apiURL =  "https://application-de-gestion-du-recrutement.onrender.com";

  constructor(
    private http:HttpClient, private userAuthService: UserAuthService) { }

  token = this.userAuthService.getToken(); 

  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });

  // Method to submit the candidature form data
  submitCandidature(formData: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}/api/candidatures/soumettre`, formData, { headers: this.headers });
  }

}
