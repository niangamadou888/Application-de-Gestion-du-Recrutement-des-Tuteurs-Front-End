import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

PATH_OF_API = "https://application-de-gestion-du-recrutement.onrender.com";

RequestHeader=new HttpHeaders({
    "No-Auth":"True"
}
)
  constructor(private httpclient: HttpClient) { }

  public register(userData:{}){
    return this.httpclient.post(
      this.PATH_OF_API + "/registerNewUser", userData);
  }

  public connection(connectionData:{email:string; password: string}){
    
    // Récupère le token JWT du localStorage (si déjà connecté)
    const token = localStorage.getItem('jwtToken');

    // Ajoute le token à l'en-tête 'Authorization' si il existe
    if (token) {
      this.RequestHeader = this.RequestHeader.set('Authorization', `Bearer ${token}`);
    }
    return this.httpclient.post(
      this.PATH_OF_API + "/authenticate", connectionData,
      {headers: this.RequestHeader})
  }

    
}
