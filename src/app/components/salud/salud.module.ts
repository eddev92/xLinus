import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SaludComponent } from './salud.component';

// Component Material
import { MdButtonModule, MdCheckboxModule, MdTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    SaludComponent
  ],
  imports: [
    BrowserModule,
   // BrowserAnimationsModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [SaludComponent]
})
export class SaludModule { }
