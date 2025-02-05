import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AnnonceService } from '../_services/annonce.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashbord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-dashbord.component.html',
  styleUrl: './user-dashbord.component.css'
})
export class UserDashbordComponent {
  annonces: any[] = [];

  constructor(
    private router:Router,
    private annonceService : AnnonceService ){}
  
  
  ngOnInit(): void {
    // Charger les annonces au démarrage du composant
    this.annonceService.getAnnonces().subscribe((data) => {
      this.annonces = data;
      });
    }

   choosePostuler(){
    this.router.navigate(['/form-candidature']);
  }
}
