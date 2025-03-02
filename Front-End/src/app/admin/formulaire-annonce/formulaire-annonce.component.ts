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
    anneeAcademique: {} as AnneeAcademique,
    description: ''
  };
  anneesAcademiques: any[] | undefined;

  constructor(
    private annonceService: AnnonceService,
    private anneeAcademiqueService: AnneeAcademiqueService
  ) {}

  ngOnInit(): void {
    this.anneeAcademiqueService.getAnneesAcademiques().subscribe(
      (data) => {
        // Assuming data is an array of objects like:
        // [{ id: 1, annee: "2020-2021" }, { id: 2, annee: "2021-2022" }]
        this.anneesAcademiques = data;
      },
      (error) => {
        console.error("Erreur lors de la récupération des années académiques:", error);
      }
    );
  }
  

  soumettreAnnonce(): void {
    if (this.annonce.titre && this.annonce.anneeAcademique && this.annonce.description) {
      // Use type assertion to inform TypeScript that 'anneeAcademique' is an object of type 'AnneeAcademique'
      const annee = (this.annonce.anneeAcademique as AnneeAcademique).annee;
  
      const annonceToSend = {
        titre: this.annonce.titre,
        anneeAcademique: annee, // Access 'annee' explicitly
        description: this.annonce.description
      };
  
      this.annonceService.ajouterAnnonce(annonceToSend).subscribe(
        (response) => {
          console.log('Annonce ajoutée avec succès !', response);
          this.annonce = { titre: '',anneeAcademique: {} as AnneeAcademique, description: '' }; // Reset the form
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
