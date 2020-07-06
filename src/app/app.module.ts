import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// componentes de login
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';

// mdulo de dhasboar con su contenido
import { DashboardModule } from './dashboard/dashboard.module';
// rutas
import { APP_ROUTES } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
