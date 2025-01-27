import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connection.component.html',
  styleUrl: './connection.component.css'
})
export class ConnectionComponent {
     
  constructor(private router: Router, 
              private userService : UserService){}

  chooseInscription(){
    this.router.navigate(['/form']);
  }
  
  connection(loginForm:NgForm){
    this.userService.connection(loginForm.value).subscribe(
      (Response)=>{
        console.log(Response)
      },
      (error)=>{
        console.log(error);
      }      
    );
  }
}
