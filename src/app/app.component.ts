import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string="Linus Llanca";

  constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    $(".menu").click(function(){
   $(".base").toggleClass("close");
});
  }
 
}
