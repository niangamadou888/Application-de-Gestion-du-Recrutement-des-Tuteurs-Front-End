import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-annonces',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-annonces.component.html',
  styleUrl: './gestion-annonces.component.css'
})
export class GestionAnnoncesComponent {
ajouterAnnonce() {
throw new Error('Method not implemented.');
}
modifierAnnonce(arg0: any) {
throw new Error('Method not implemented.');
}
  annonces = [
    { id: 1, titre: 'Tuteur en Mathématique(Licence)', description: 'Description de l\'annonce 1', date: '2025-02-01', statut: 'Publiée' },
    { id: 2, titre: 'Tuteur en Finance-Comptabilité (Licence)', description: 'Description de l\'annonce 2', date: '2025-02-02', statut: 'En attente' },
    { id: 3, titre: 'Tuteur en Informatique (Licence)', description: 'Description de l\'annonce 2', date: '2025-02-02', statut: 'En attente' },
    { id: 4, titre: 'Tuteur en Sociologie (Master)', description: 'Description de l\'annonce 2', date: '2025-02-02', statut: 'Publiée' },
    { id: 5, titre: 'Tuteur en Big Data Analytics (Master)', description: 'Description de l\'annonce 2', date: '2025-02-02', statut: 'Publiée' },
  ];

  supprimerAnnonce(id: number) {
    this.annonces = this.annonces.filter(annonce => annonce.id !== id);
  }
}
