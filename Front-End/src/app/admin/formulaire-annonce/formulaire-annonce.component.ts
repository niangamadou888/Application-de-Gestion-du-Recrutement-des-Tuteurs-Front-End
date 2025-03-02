import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AnneeAcademiqueService } from '../../core/_services/annee_service/annee-academique.service';
import { AnnonceService } from '../../core/_services/annonce.service';

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
    anneeAcademique: '',
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
      console.log(this.annonce.anneeAcademique);
      // On s'assure que 'anneeAcademique' est un objet avant d'en extraire la propriété 'annee'
      const annonceToSend = {
        titre: this.annonce.titre,
        anneeAcademique: this.annonce.anneeAcademique, // On envoie la chaîne d'année, pas l'objet complet
        description: this.annonce.description
      };
  
      // Envoi de l'annonce
      this.annonceService.ajouterAnnonce(annonceToSend).subscribe(
        (response) => {
          console.log('Annonce ajoutée avec succès !', response);
          this.annonce = { titre: '', anneeAcademique: '', description: '' }; // Réinitialiser le formulaire
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
