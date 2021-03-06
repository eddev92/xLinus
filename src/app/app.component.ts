import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directive: [LoginComponent]
})
export class AppComponent {
  public name:string="Linus Llanca";

  constructor() {}
  public base: any
  public h4: boolean;   
  public menu: boolean;

   ngOnInit() {
      
   	this.base = 'base'
   	this.h4 = false;
    if(this.menu){
      console.log('menu activado')
    }else{
      console.log('menu desactivado')
    }
    
  } 
 
	public changeClass() {
			 this.base == 'base' ? this.base ='base close' : this.base = 'base';
			 this.h4 == false ? this.h4 = true : this.h4 = false;
	} 	 

}
