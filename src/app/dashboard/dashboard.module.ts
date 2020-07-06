import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PascientesComponent } from './pascientes/pascientes.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

// rutas
import { DASHBOARD_ROUTES } from './dashboard.routes';



@NgModule({
  declarations: [DashboardComponent,
                 PascientesComponent],
  imports: [
    SharedModule,
    DASHBOARD_ROUTES
  ],
  exports: [
    CommonModule,
    DashboardComponent,
    PascientesComponent
  ]
})
export class DashboardModule { }
