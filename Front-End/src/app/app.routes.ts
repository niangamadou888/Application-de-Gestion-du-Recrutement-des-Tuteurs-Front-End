import { Routes } from '@angular/router';

// Layouts
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { CandidatLayoutComponent } from './layouts/candidat-layout/candidat-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

// Pages Public (accessible à tous)
import { HomeComponent } from './public/home/home.component';
import { ConnectionComponent } from './public/connection/connection.component';
import { FormComponent } from './public/form/form.component';

// Pages Candidat
import { UserDashbordComponent } from './candidat/user-dashbord/user-dashbord.component';
import { FormCandidatureComponent } from './candidat/form-candidature/form-candidature.component';
import { CandidatureComponent } from './candidat/candidature/candidature.component';

// Pages Admin
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { GestionAnnoncesComponent } from './admin/gestion-annonces/gestion-annonces.component';
import { FormulaireAnnonceComponent } from './admin/formulaire-annonce/formulaire-annonce.component';
import { AjoutAnneeComponent } from './admin/ajout-annee/ajout-annee.component';
import { GestionDossiersComponent } from './admin/gestion-dossiers/gestion-dossiers.component';
import { ListeCandidatsComponent } from './admin/liste-candidats/liste-candidats.component';

export const routes: Routes = [
  // Layout Public
  {
    path: '', component: PublicLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'connexion', component: ConnectionComponent },
      { path: 'inscription', component: FormComponent }
    ]
  },

  // Layout Candidat
  {
    path: 'candidat', component: CandidatLayoutComponent, children: [
      { path: 'user-dashboard', component: UserDashbordComponent },
      { path: 'form-candidature', component: FormCandidatureComponent },
      { path: 'candidature', component: CandidatureComponent }
    ]
  },

  // Layout Admin
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'admin-dashbord', component: AdminDashbordComponent },
      { path: 'gestion-annonces', component: GestionAnnoncesComponent },
      { path: 'formulaire-annonce', component: FormulaireAnnonceComponent },
      { path: 'ajout-annee', component: AjoutAnneeComponent },
      { path: 'gestion-dossiers', component: GestionDossiersComponent },
      { path: 'liste-candidats', component: ListeCandidatsComponent }
    ]
  },

  // Redirection si la route n'existe pas
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
