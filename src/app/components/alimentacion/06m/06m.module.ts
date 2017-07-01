import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';
import { FirstDate06Component } from './06m.component';
//import { AlimentacionService } from './alimentacion.service';

@NgModule({
  declarations: [
    FirstDate06Component
  ],
  imports: [
    BrowserModule,
    MdSliderModule,
    MdCheckboxModule,
    MdDatepickerModule,
    MdButtonModule,
    MdInputModule,
    MdNativeDateModule,
  ],
  providers: [],
  bootstrap: [FirstDate06Component]
})
export class FirstDate06Module { }
