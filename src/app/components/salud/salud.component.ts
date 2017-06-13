import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent {
	
	 constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    
  }
}
