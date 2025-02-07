import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { FormCandidatureComponent } from './form-candidature/form-candidature.component';
import { GestionAnnoncesComponent } from './gestion-annonces/gestion-annonces.component';
import { FormulaireAnnonceComponent } from './formulaire-annonce/formulaire-annonce.component';

export const routes: Routes = [
    {path:'form', component:FormComponent},
    {path:'connection', component:ConnectionComponent},
    {path:'home', component:HomeComponent},
    {path:'userDashbord', component:UserDashbordComponent},
    {path:'adminDashbord', component: AdminDashbordComponent},
    {path:'form-candidature', component: FormCandidatureComponent},
    {path: 'gestion-annonces', component: GestionAnnoncesComponent },
    {path: 'formulaire-annonce', component: FormulaireAnnonceComponent },
    {path: '', redirectTo: '/home', pathMatch: 'full' },
];
