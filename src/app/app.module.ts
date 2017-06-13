import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SaludComponent} from './components/salud/salud.component';
import { AlimentacionComponent } from './components/alimentacion/alimentacion.component';

export const ROUTES: Routes = [
  { path: '', component: DashboardComponent },
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
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
