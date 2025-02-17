import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-candidats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-candidats.component.html',
  styleUrl: './liste-candidats.component.css'
})
export class ListeCandidatsComponent {
  searchTerm: string = '';
  candidats = [
    { id: 1, nom: 'Abdoulaye Segnane', mail: 'abdoulaye.segnane@unchk.sn', date: '12-01-2025', statut: 'En cours de traitement' },
    { id: 2, nom: 'Khady Kandji', mail: 'khady.kandji3@unchk.sn', date: '12-01-2025', statut: 'Acceptée' },
    { id: 3, nom: 'Pape Sow', mail: 'Pape.sow1@unchk.sn', date: '13-01-2025', statut: 'Acceptée' },
    { id: 4, nom: 'Bassirou Faye', mail: 'bassirou.faye2@unchk.sn', date: '14-01-2025', statut: 'En cours de traitement' },
    { id: 5, nom: 'Khadim Bâ', mail: 'khadim.bâ5@unchk.sn', date: '16-01-2025', statut: 'En cours de traitement' },
    { id: 6, nom: 'Joseph Aliou Sonko', mail: 'josephaliou.sane@unchk.sn', date: '17-01-2025', statut: 'En cours de traitement' },
  ];

  filteredCandidats = [...this.candidats];

  searchCandidat() {
    if (this.searchTerm.trim() === '') {
      this.filteredCandidats = [...this.candidats];
    } else {
      this.filteredCandidats = this.candidats.filter(candidat =>
        candidat.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        candidat.mail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        candidat.statut.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  search(id: number) {
    console.log('Voir dossier du candidat avec ID :', id);
  }
}
