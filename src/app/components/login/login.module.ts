import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login.component';
import { MenuComponent } from './../tools/menu/menu.component';
import { MdSliderModule, MdInputModule, MdButtonModule, MdNativeDateModule, MdCheckboxModule, MdTabsModule, MdDatepickerModule } from '@angular/material';

@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    MdSliderModule,
    FormsModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class EducacionModule { }
