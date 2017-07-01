import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Components
import { AppComponent } from './../../../app.component';
import { DashboardComponent } from './../../../components/dashboard/dashboard.component';
import { EducacionComponent } from './../../../components/educacion/educacion.component';
import { SaludComponent} from './../../../components/salud/salud.component';
import { AlimentacionComponent } from './../../../components/alimentacion/alimentacion.component';
import { FirstDate06Component } from './../../../components/alimentacion/06m/06m.component';
import { LoginComponent } from './../../../components/login/login.component';
import { MenuComponent } from './../../../components/tools/menu/menu.component';
// Services

export const ROUTES: Routes = [
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'salud', component: SaludComponent },
  { path: 'alimentacion', component: AlimentacionComponent },
  { path: 'alimentacion/06m', component: FirstDate06Component }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    AlimentacionComponent,
    SaludComponent,
    EducacionComponent,
    FirstDate06Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    JsonpModule,
    HttpModule,
    FormsModule
  ],
  bootstrap: [MenuComponent]
})
export class AppModule { }
