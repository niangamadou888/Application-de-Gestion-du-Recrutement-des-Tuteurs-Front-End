import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-annonces',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './gestion-annonces.component.html',
  styleUrl: './gestion-annonces.component.css'
})
export class GestionAnnoncesComponent {
  router: any;
ajouterAnnonce() {
  this.router.navigate(['/admin/formulaire-annonce']);
}
modifierAnnonce(arg0: any) {
throw new Error('Method not implemented.');
}
  annonces = [
    { id: 1, titre: 'Tuteur en Mathématique(Licence)', description: 'Description de l\'annonce 1', date: '2025-02-01'},
    { id: 2, titre: 'Tuteur en Finance-Comptabilité (Licence)', description: 'Description de l\'annonce 2', date: '2025-02-02' },
    { id: 3, titre: 'Tuteur en Informatique (Licence)', description: 'Description de l\'annonce 2', date: '2025-02-02'},
    { id: 4, titre: 'Tuteur en Sociologie (Master)', description: 'Description de l\'annonce 2', date: '2025-02-02' },
    { id: 5, titre: 'Tuteur en Big Data Analytics (Master)', description: 'Description de l\'annonce 2', date: '2025-02-02' },
  ];

  supprimerAnnonce(id: number) {
    this.annonces = this.annonces.filter(annonce => annonce.id !== id);
  }
  naviguerVersFormulaire() {
    this.router.navigate(['admin/formulaire-annonce']);
  } 
}
