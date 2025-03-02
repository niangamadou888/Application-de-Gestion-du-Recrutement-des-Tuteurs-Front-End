import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink } from '@angular/router';
import { AnnonceService } from '../../core/_services/annonce.service';

@Component({
  selector: 'app-gestion-annonces',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-annonces.component.html',
  styleUrl: './gestion-annonces.component.css'
})

export class GestionAnnoncesComponent implements OnInit {

  annonces : any[] = [];

  constructor(
      private annonceService : AnnonceService,
    private router:Router ){}

  ngOnInit(): void {
    // Charger les annonces au démarrage du composant
    this.annonceService.getAnnonces().subscribe((data) => {
      this.annonces = data;
      console.log(this.annonces);
      });
    }

  modifierAnnonce(id:string) : void {
    
      }

  supprimerAnnonce(id:string) : void{
    if (confirm("Voulez-vous vraiment supprimer cette annonce ?")) {
      this.annonceService.supprimerAnnonce(id).subscribe(() => {
      this.annonces = this.annonces.filter(annonce => annonce.id !== id);
      });
    }
  }  

  ajouterAnnonce() {
    this.router.navigate(['/admin/formulaire-annonce']);
  }

  naviguerVersFormulaire() {
      this.router.navigate(['admin/formulaire-annonce']);
    }

}
