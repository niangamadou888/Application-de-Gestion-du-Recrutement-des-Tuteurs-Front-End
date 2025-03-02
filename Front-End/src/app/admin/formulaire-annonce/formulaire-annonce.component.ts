import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnneeAcademiqueService } from '../../core/_services/annee_service/annee-academique.service';
import { AnnonceService } from '../../core/_services/annonce.service';

interface AnneeAcademique {
  annee: string;
}

@Component({
  selector: 'app-formulaire-annonce',
  standalone: true,
  imports: [BrowserModule, FormsModule, CommonModule],
  templateUrl: './formulaire-annonce.component.html',
  styleUrls: ['./formulaire-annonce.component.css']
})
export class FormulaireAnnonceComponent implements OnInit {
  annonce = {
    titre: '',
    anneeAcademique: '',  // Store only the ID of the academic year
    description: ''
  };
  anneesAcademiques: any[] = [];  // Array containing the list of academic years

  constructor(
    private annonceService: AnnonceService,
    private anneeAcademiqueService: AnneeAcademiqueService
  ) {}

  ngOnInit(): void {
    // Fetch the list of academic years when the component initializes
    this.anneeAcademiqueService.getAnneesAcademiques().subscribe(
      (data) => {
        this.anneesAcademiques = data;
      },
      (error) => {
        console.error("Erreur lors de la récupération des années académiques:", error);
      }
    );
  }

  soumettreAnnonce(): void {
    if (this.annonce.titre && this.annonce.anneeAcademique && this.annonce.description) {
      const annonceToSend = {
        titre: this.annonce.titre,
        anneeAcademiqueId: this.annonce.anneeAcademique,  // Send only the ID
        description: this.annonce.description
      };

      console.log(annonceToSend);

      this.annonceService.ajouterAnnonce(annonceToSend).subscribe(
        (response) => {
          console.log('Annonce ajoutée avec succès !', response);
          this.annonce = { titre: '', anneeAcademique: '', description: '' }; // Reset the form
        },
        (error) => {
          console.log("Erreur lors de l'ajout de l'annonce :", error);
        }
      );
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }
}
