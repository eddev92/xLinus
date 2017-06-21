import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';
import { AlimentacionComponent } from './alimentacion.component';

@NgModule({
  declarations: [
    AlimentacionComponent
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
  bootstrap: [AlimentacionComponent]
})
export class AlimentacionModule { }
