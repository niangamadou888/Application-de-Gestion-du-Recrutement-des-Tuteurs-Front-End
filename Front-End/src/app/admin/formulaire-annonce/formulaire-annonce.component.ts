import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common';
import { AnneeAcademiqueService } from '../../core/_services/annee_service/annee-academique.service';
import { AnnonceService } from '../../core/_services/annonce.service';
@Component({
  selector: 'app-formulaire-annonce',
  standalone: true,
  imports: [BrowserModule, FormsModule, CommonModule],
  templateUrl: './formulaire-annonce.component.html',
  styleUrl: './formulaire-annonce.component.css'
})
export class FormulaireAnnonceComponent {
  annonce = {
    titre: '',
    annee: '',
    description: ''
  };
  anneesAcademiques: any;

  constructor(
    private annonceService: AnnonceService,
    private anneeAcademique : AnneeAcademiqueService
  ){}

  soumettreAnnonce(): void {
    if (this.annonce.titre && this.annonce.annee && this.annonce.description) {
      this.annonceService.ajouterAnnonce(this.annonce).subscribe(
        (response) => {
          console.log('Annonce ajoutée avec succès !', response);
          this.annonce = { titre: '', annee: '', description: '' }; // Réinitialiser le formulaire
        },
        (error)=>{
          console.error("Erreur lors de l'ajout de l'annonce :");
        });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }
  
}