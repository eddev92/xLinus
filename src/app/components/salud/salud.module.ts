import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SaludComponent } from './salud.component';

// Component Material
import { MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [
    SaludComponent
  ],
  imports: [
    BrowserModule,
   // BrowserAnimationsModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdButtonModule,
    MdNativeDateModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [SaludComponent]
})
export class SaludModule { }
