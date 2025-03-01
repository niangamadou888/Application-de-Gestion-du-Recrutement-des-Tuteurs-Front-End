import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnneeAcademiqueService } from '../../core/_services/annee_service/annee-academique.service';

@Component({
  selector: 'app-ajout-annee',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './ajout-annee.component.html',
  styleUrl: './ajout-annee.component.css'
})
export class AjoutAnneeComponent implements OnInit {
  formGroup! : FormGroup ;
  annees: any[] = [];
 
  constructor( private fb: FormBuilder,
     private anneeAcademique : AnneeAcademiqueService){}

  ngOnInit(): void {
    
    // Initialisation du formulaire
    this.formGroup = this.fb.group({
      annee: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{4}$/)]]
    });

    // Chargement des années académiques existantes
    this.chargerAnnees();

  }
  chargerAnnees() {
    this.anneeAcademique.getAnneesAcademiques().subscribe(data => {
      this.annees = data;
    });
  }

  ajouterAnnee() {
    if (this.formGroup.valid) {
      const nouvelleAnnee = this.formGroup.value.annee;
      console.log("Ajout de l'année :", nouvelleAnnee); // Vérification
      this.anneeAcademique.ajouterAnneeAcademique({ annee: nouvelleAnnee }).subscribe(() => {
        this.formGroup.reset(); // Remet le formulaire à l'état initial
        this.chargerAnnees(); // Recharger les années après ajout
      });
    } else {
      console.log("Formulaire invalide");
    }
  }

  supprimerAnnee(id: string) {
    if (confirm("Voulez-vous vraiment supprimer cette année académique ?")) {
      this.anneeAcademique.supprimerAnneeAcademique(id).subscribe(() => {
        this.annees = this.annees.filter(annee => annee.annee !== id);
      });
    }
  }
}