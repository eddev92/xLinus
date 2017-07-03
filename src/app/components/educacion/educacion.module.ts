import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSelectModule, MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';
import { EducacionComponent } from './educacion.component';

@NgModule({
  declarations: [
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    MdDatepickerModule,
    MdSelectModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [EducacionComponent]
})
export class EducacionModule { }
