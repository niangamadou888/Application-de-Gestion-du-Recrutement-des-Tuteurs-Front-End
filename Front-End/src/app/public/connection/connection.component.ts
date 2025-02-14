import { Component } from '@angular/core';
import { UserService } from '../../core/_services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../../core/_services/user-auth.service';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
     
  constructor(private router: Router, 
              private userService : UserService,
              private userAuthService : UserAuthService){}

  chooseInscription(){
    this.router.navigate(['/form']);
  }
  
  connection(loginForm: NgForm){
    this.userService.connection(loginForm.value).subscribe(
      (Response: any) => {
        this.userAuthService.setRoles(Response.user.role);
        this.userAuthService.setToken(Response.jwtToken); 
        
        const role = Response.user.role[0].roleName;
        if(role === 'Admin'){
          this.router.navigate(['/adminDashbord']);
        } else {
          this.router.navigate(['/userDashbord']);
        }
      },
      (error)=>{
        console.log(error);
        alert('Email ou Mot de passe incorrect. Veuillez réessayer.');
      }      
    );
  }
}

