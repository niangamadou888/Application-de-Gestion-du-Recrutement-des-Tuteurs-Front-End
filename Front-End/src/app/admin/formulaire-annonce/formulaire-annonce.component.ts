import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule
import { CommonModule } from '@angular/common';
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

  soumettreAnnonce() {
    console.log('Bouton cliqué !');
    console.log('Annonce soumise :', this.annonce);
    alert('Annonce publiée avec succès !');
  }
  
}