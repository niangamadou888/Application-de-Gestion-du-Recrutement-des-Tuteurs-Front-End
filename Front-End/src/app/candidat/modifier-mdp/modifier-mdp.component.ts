import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modifier-mdp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifier-mdp.component.html',
  styleUrl: './modifier-mdp.component.css'
})
export class ModifierMdpComponent {
  ancienMdp: string = '';
  nouveauMdp: string = '';
  confirmerMdp: string = '';
  erreurMessage: string = '';
  successMessage: string = '';

  onSubmit() {
    this.erreurMessage = '';
    this.successMessage = '';

    // Vérification des champs vides
    if (!this.ancienMdp || !this.nouveauMdp || !this.confirmerMdp) {
      this.erreurMessage = 'Tous les champs sont obligatoires.';
      return;
    }

    // Vérification de la longueur du nouveau mot de passe
    if (this.nouveauMdp.length < 6) {
      this.erreurMessage = 'Le mot de passe doit contenir au moins 6 caractères.';
      return;
    }

    // Vérification de la confirmation
    if (this.nouveauMdp !== this.confirmerMdp) {
      this.erreurMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Simulation d'envoi au back-end
    console.log('Ancien:', this.ancienMdp);
    console.log('Nouveau:', this.nouveauMdp);

    this.successMessage = 'Votre mot de passe a été modifié avec succès.';
    
    // Réinitialisation des champs après succès
    this.ancienMdp = '';
    this.nouveauMdp = '';
    this.confirmerMdp = '';
  }
}
