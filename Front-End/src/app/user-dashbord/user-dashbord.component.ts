import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashbord',
  standalone: true,
  imports: [],
  templateUrl: './user-dashbord.component.html',
  styleUrl: './user-dashbord.component.css'
})
export class UserDashbordComponent {
  constructor(
    private router:Router
  ){}
  
   choosePostuler(){
    this.router.navigate(['/form-candidature']);
  }
}
