import { GestionDossiersComponent } from './admin/gestion-dossiers/gestion-dossiers.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './candidat/form/form.component';
import { ConnectionComponent } from './candidat/connection/connection.component';
import { HomeComponent } from './candidat/home/home.component';
import { UserDashbordComponent } from './candidat/user-dashbord/user-dashbord.component';
import { AdminDashbordComponent } from './admin/admin-dashbord/admin-dashbord.component';
import { FormCandidatureComponent } from './candidat/form-candidature/form-candidature.component';
import { GestionAnnoncesComponent } from './admin/gestion-annonces/gestion-annonces.component';
import { FormulaireAnnonceComponent } from './admin/formulaire-annonce/formulaire-annonce.component';
import { AjoutAnneeComponent } from './admin/ajout-annee/ajout-annee.component';
import { ListeCandidatsComponent } from './admin/liste-candidats/liste-candidats.component';
import { HeaderComponent } from './shared/header/header.component';
import { SlidebarComponent} from './shared/slidebar/slidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CandidatureComponent } from './candidat/candidature/candidature.component';

export const routes: Routes = [
    {path:'form', component:FormComponent},
    {path:'connection', component:ConnectionComponent},
    {path:'home', component:HomeComponent},
    {path:'userDashbord', component:UserDashbordComponent},
    {path:'adminDashbord', component: AdminDashbordComponent},
    {path:'form-candidature', component: FormCandidatureComponent},
<<<<<<< HEAD
    {path: 'gestion-annonces', component: GestionAnnoncesComponent},
    {path: 'formulaire-annonce', component: FormulaireAnnonceComponent},
    {path: 'ajout-annee', component: AjoutAnneeComponent },
    {path: 'gestion-dossiers', component: GestionDossiersComponent},
    {path: 'liste-candidats', component: ListeCandidatsComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'slidebar', component: SlidebarComponent},
    {path: 'footer', component: FooterComponent},
=======
    {path: 'gestion-annonces', component: GestionAnnoncesComponent },
    {path: 'formulaire-annonce', component: FormulaireAnnonceComponent },
    {path: 'candidature', component: CandidatureComponent},
>>>>>>> 5841d9b9c8be8ac1661a7b442f5fc985f140c149
    {path: '', redirectTo: '/home', pathMatch: 'full' },
];
