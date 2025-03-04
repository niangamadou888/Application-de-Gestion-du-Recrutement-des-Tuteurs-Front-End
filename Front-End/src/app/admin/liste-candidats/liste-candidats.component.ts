import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidatureService } from '../../core/_services/candidature_service/candidature.service';

@Component({
  selector: 'app-liste-candidats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-candidats.component.html',
  styleUrl: './liste-candidats.component.css'
})
export class ListeCandidatsComponent implements OnInit{

  searchTerm: string = ''; // ✅ Ajout de searchTerm
  candidats: any[] = [];
  annonceId : number = 0;

  constructor(private route: ActivatedRoute,
    private candidatureService : CandidatureService
  ) {}

  ngOnInit(): void {

     this.annonceId =+this.route.snapshot.paramMap.get('annonceId')!;
    this.loadCandidatures();
  }

  loadCandidatures(): void {
    this.candidatureService.getCandidaturesByAnnonceId(this.annonceId).subscribe(
      (data) => {
        this.candidats = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des candidatures', error);
      }
    );
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


 

