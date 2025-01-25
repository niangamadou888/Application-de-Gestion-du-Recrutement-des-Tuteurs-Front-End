import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ConnectionComponent } from './connection/connection.component';

export const routes: Routes = [
    {path:'form', component:FormComponent},
    {path:'connection', component:ConnectionComponent},
];
