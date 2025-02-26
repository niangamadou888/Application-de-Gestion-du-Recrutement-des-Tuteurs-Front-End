import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { AnnonceService } from '../../core/_services/annonce.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-dashbord',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-dashbord.component.html',
  styleUrl: './user-dashbord.component.css'
})
export class UserDashbordComponent implements OnInit{
  annonces: any[] = [];

  constructor(
    private router:Router,
    private annonceService : AnnonceService ){}


  ngOnInit(): void {
    // Charger les annonces au démarrage du composant
    this.annonceService.getAnnonces().subscribe((data) => {
      this.annonces = data;
      console.log(this.annonces);
      });
    }

   chooseCandidature(){
    this.router.navigate(['/candidat/candidature'])
   }

   chooseCompte(){
    this.router.navigate(['/candidat/compte'])
   }
   chooseNotifications(){
    this.router.navigate(['/candidat/notifications'])
   }
}
