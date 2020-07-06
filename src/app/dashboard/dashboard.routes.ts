import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PascientesComponent } from './pascientes/pascientes.component';
import { DashboardComponent } from './dashboard.component';


const ROUTES: Routes = [
{
  path: '',
  component: DashboardComponent,
  children: [
    {path: 'dashboard', component: PascientesComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  ]
}
];


export const DASHBOARD_ROUTES = RouterModule.forChild( ROUTES);
