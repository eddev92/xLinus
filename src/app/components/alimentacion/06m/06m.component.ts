import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { AlimentacionService } from './../alimentacion/alimentacion.service';

@Component({
  selector: 'firstdate',
  templateUrl: './06m.component.html',
  styleUrls: ['./06m.component.css'],
 // providers: [AlimentacionService]
})
export class FirstDate06Component {

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
	
	}
}
