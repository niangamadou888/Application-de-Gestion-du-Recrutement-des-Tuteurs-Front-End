import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-dossiers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-dossiers.component.html',
  styleUrl: './gestion-dossiers.component.css'
})
export class GestionDossiersComponent {
  // Variable pour stocker le terme de recherche
  searchTerm: string = '';

  // Liste des dossiers (exemple de données statiques)
  dossiers = [
    { id: 1, nom: 'Abdoulaye Segnane', mail: 'abdoulaye.segnane@unchk.sn', date: '12-01-2025', statut: 'En cours de traitement', anneeAcademique: '2024-2025' },
    { id: 2, nom: 'Khady Kandji', mail: 'khady.kandji3@unchk.sn', date: '12-01-2025', statut: 'Acceptée', anneeAcademique: '2024-2025' },
    { id: 3, nom: 'Pape Sow', mail: 'pape.sow1@unchk.sn', date: '13-01-2025', statut: 'Acceptée', anneeAcademique: '2023-2024' },
    { id: 4, nom: 'Bassirou Faye', mail: 'bassirou.faye2@unchk.sn', date: '14-01-2025', statut: 'En cours de traitement', anneeAcademique: '2023-2024' },
    { id: 5, nom: 'Khadim Bâ', mail: 'khadim.bâ5@unchk.sn', date: '16-01-2025', statut: 'En cours de traitement', anneeAcademique: '2024-2025' },
    { id: 6, nom: 'Joseph Aliou Sonko', mail: 'josephaliou.sane@unchk.sn', date: '17-01-2025', statut: 'En cours de traitement', anneeAcademique: '2022-2023' },
    
  ];

  // Liste filtrée des dossiers
  filteredDossiers = [...this.dossiers];

  /**
   * Fonction pour rechercher un dossier en fonction du terme entré
   */
  searchDossier() {
    if (this.searchTerm.trim() === '') {
      this.filteredDossiers = [...this.dossiers];
    } else {
      this.filteredDossiers = this.dossiers.filter(dossier =>
        dossier.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dossier.mail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dossier.statut.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        dossier.anneeAcademique.includes(this.searchTerm)
      );
    }
  }

  /**
   * Fonction pour voir un dossier
   * @param id ID du dossier à consulter
   */
  voirDossier(id: number) {
    console.log('Voir le dossier avec ID :', id);
  }

  /**
   * Fonction pour modifier un dossier
   * @param id ID du dossier à modifier
   */
  modifierDossier(id: number) {
    console.log('Modifier le dossier avec ID :', id);
  }

  /**
   * Fonction pour supprimer un dossier
   * @param id ID du dossier à supprimer
   */
  supprimerDossier(id: number) {
    // Afficher une confirmation avant la suppression
    if (confirm('Êtes-vous sûr de vouloir supprimer ce dossier ?')) {
      this.dossiers = this.dossiers.filter(dossier => dossier.id !== id);
      this.filteredDossiers = [...this.dossiers]; // Mettre à jour la liste après suppression
      console.log('Dossier supprimé avec ID :', id);
    }
  }
}
