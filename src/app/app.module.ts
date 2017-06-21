import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SaludComponent} from './components/salud/salud.component';
import { AlimentacionComponent } from './components/alimentacion/alimentacion.component';
// Services
import { serviceConstant } from './core/core.services';
// Components Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';

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
    JsonpModule,
    HttpModule,
    FormsModule,
    MdSliderModule,
   // NoopAnimationsModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [serviceConstant],
  bootstrap: [AppComponent]
})
export class AppModule { }
