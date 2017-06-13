import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlimentacionComponent } from './alimentacion.component';

@NgModule({
  declarations: [
    AlimentacionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AlimentacionComponent]
})
export class AlimentacionModule { }
