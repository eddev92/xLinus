import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';
import { AlimentacionComponent } from './alimentacion.component';
import { AlimentacionService } from './alimentacion.service';

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
  providers: [AlimentacionService],
  bootstrap: [AlimentacionComponent]
})
export class AlimentacionModule { }
