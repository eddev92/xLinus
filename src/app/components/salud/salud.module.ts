import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SaludComponent } from './salud.component';
//Services
import { SaludService } from './../salud/salud.service';
// Component Material
import { MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';

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
    MdInputModule,
    MdNativeDateModule,
    MdTabsModule
  ],
  providers: [SaludService],
  bootstrap: [SaludComponent]
})
export class SaludModule { }
