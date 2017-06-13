import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SaludComponent } from './salud.component';

@NgModule({
  declarations: [
    SaludComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SaludComponent]
})
export class SaludModule { }
