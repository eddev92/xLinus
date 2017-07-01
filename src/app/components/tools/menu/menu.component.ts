import { Component, OnInit, AfterViewInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
	 constructor(private route: ActivatedRoute) {}
  public base: any
  public h4: boolean;   
  public menu: boolean;

   ngOnInit() {
      
   	this.base = 'base'
   	this.h4 = false;
   	this.menu=true;
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