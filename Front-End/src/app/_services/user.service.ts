import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

PATH_OF_API = "http://localhost:9090";

RequestHeader=new HttpHeaders({
    "No-Auth":"True"
}
)
  constructor(private httpclient: HttpClient) { }

  public register(userData:{}){
    return this.httpclient.post(
      this.PATH_OF_API + "/register", userData);
  }

  public connection(connectionData:{email:string; password: string}){
    return this.httpclient.post(
      this.PATH_OF_API + "/authenticate", connectionData,
      {headers: this.RequestHeader})
  }

    
}
