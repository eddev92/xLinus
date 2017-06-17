import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SaludComponent} from './components/salud/salud.component';
import { AlimentacionComponent } from './components/alimentacion/alimentacion.component';

// Components Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';

export const ROUTES: Routes = [
  { path: '',redirectTo: '/dashboard',pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'salud', component: SaludComponent },
  { path: 'alimentacion', component: AlimentacionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlimentacionComponent,
    SaludComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
   // NoopAnimationsModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
