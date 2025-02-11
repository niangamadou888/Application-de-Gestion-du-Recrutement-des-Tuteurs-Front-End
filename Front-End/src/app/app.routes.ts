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
import { CandidatureComponent } from './candidat/candidature/candidature.component';

export const routes: Routes = [
    {path:'form', component:FormComponent},
    {path:'connection', component:ConnectionComponent},
    {path:'home', component:HomeComponent},
    {path:'userDashbord', component:UserDashbordComponent},
    {path:'adminDashbord', component: AdminDashbordComponent},
    {path:'form-candidature', component: FormCandidatureComponent},
    {path: 'gestion-annonces', component: GestionAnnoncesComponent },
    {path: 'formulaire-annonce', component: FormulaireAnnonceComponent },
    {path: 'candidature', component: CandidatureComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full' },
];
