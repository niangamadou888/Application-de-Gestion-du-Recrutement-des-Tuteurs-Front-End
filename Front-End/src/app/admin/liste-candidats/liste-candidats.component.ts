import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-candidats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-candidats.component.html',
  styleUrl: './liste-candidats.component.css'
})
export class ListeCandidatsComponent {

  searchTerm: string = ''; // ✅ Ajout de searchTerm
  idAnnonce!: number; // ✅ ID de l’annonce
  candidats: { id: number, nom: string, mail: string, date: string, idAnnonce: number }[] = [];


  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupération de l'ID de l'annonce depuis l'URL
    this.idAnnonce = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler des candidats (remplacer par un appel l'API réel)
    this.candidats = [
      { id: 1, nom: 'Jean Dupont', mail: 'jean@mail.com', date: '2024-02-20', idAnnonce: this.idAnnonce },
      { id: 2, nom: 'Marie Curie', mail: 'marie@mail.com', date: '2024-02-21', idAnnonce: this.idAnnonce }
    ];
  }

  voirDossier(id: number) {
    console.log(`Voir dossier du candidat avec ID : ${id}`);
  }
   // Liste filtrée des Candidats
   filteredCandidats = [...this.candidats];
    /**
   * Fonction pour rechercher un dossier en fonction du terme entré
   */
    searchCandidat() {
      if (this.searchTerm.trim() === '') {
        this.filteredCandidats = [...this.candidats];
      } else {
        this.filteredCandidats = this.candidats.filter(candidats =>
          candidats.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          candidats.mail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          candidats.date.toLowerCase().includes(this.searchTerm.toLowerCase()) 
        );
      }
    }
}
