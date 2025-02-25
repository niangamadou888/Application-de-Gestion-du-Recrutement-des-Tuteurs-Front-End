import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ajout-annee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ajout-annee.component.html',
  styleUrl: './ajout-annee.component.css'
})
export class AjoutAnneeComponent {
  nouvelleAnnee: string = '';
  anneesAcademiques: string[] = [
    '2024-2025',
    '2023-2024',
    '2022-2023',
    '2021-2022',
    '2020-2021',
    '2019-2020'
  ];

  ajouterAnnee() {
    if (this.nouvelleAnnee && !this.anneesAcademiques.includes(this.nouvelleAnnee)) {
      this.anneesAcademiques.unshift(this.nouvelleAnnee);
      this.nouvelleAnnee = '';
    }
  }

  supprimerAnnee(index: number) {
    this.anneesAcademiques.splice(index, 1);
  }
}
