import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

PATH_OF_API = "https://application-de-gestion-du-recrutement.onrender.com";

RequestHeader=new HttpHeaders({
    "No-Auth":"True"
}
)
  constructor(private httpclient: HttpClient,
    private userAuthService: UserAuthService) { }

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
  
  public roleMatch(allowedRoles: string[]): boolean {
    let isMatch=false;  // Variable pour vérifier si l'utilisateur a un rôle autorisé
    const userRoles : any=this.userAuthService.getRoles(); // Récupération des rôles de l'utilisateur

    if (userRoles !== null && userRoles) { // Vérifie si l'utilisateur a des rôles
      for (let i = 0; i < userRoles.length; i++) {
        if (allowedRoles.includes(userRoles[i].roleName)) { // Vérifie si le rôle est autorisé
          isMatch = true;
          break; // Dès qu'on trouve une correspondance, on sort de la boucle
        }
      }
    }
    return isMatch;
  }

  // Fetch user info from the backend
  getUserInfo(token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpclient.get<any>(`${this.PATH_OF_API}/getUserInfo`, { headers });
  }

  // Update user information (firstName, lastName, email)
  updateUserInfo(token: string, user: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpclient.put<any>(`${this.PATH_OF_API}/updateUserInfo`, user, { headers });
  }

  sendResetEmail(userEmail: string): Observable<any> {
    const payload = { userEmail }; // Create the body with the user email
    return this.httpclient.post(`${this.PATH_OF_API}/forgot-password`, payload).pipe(
      catchError((error) => {
        console.error('Error details:', error);
        return throwError('An error occurred during the password reset process.');
      })
    );
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    const body = { newPassword };  // The payload to send with the request

    // Make a POST request to reset the password
    return this.httpclient.post<any>(`${this.PATH_OF_API}/reset-password?token=${token}`, body).pipe(
      catchError((error) => {
        // Handle any errors here (e.g., show an error message)
        console.error('Error during password reset:', error);
        return throwError('An error occurred while resetting your password. Please try again.');
      })
    );
  }
    
}
