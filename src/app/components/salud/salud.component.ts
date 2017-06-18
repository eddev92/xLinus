import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SaludService } from './../salud/salud.service';
import { serviceConstant } from '../../core/core.services';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css'],
  providers: [SaludService]
})
export class SaludComponent implements OnInit{

	public Registers:any[];
	public a:any;
	 constructor(private saludService: SaludService,
	 				public route: ActivatedRoute) {}

  public ngOnInit() {
  	this.saludService.getRegisters().subscribe(
     data => {       
     	this.Registers = data;

        console.log(this.Registers, "Registers")
      },
      error => {
      	console.log(error, "error =/")
      }
   	);

	
  }

  public SaveWeight(values:any){
  	this.a = values;
  	console.log(this.a,"form values")
  }
  public openCity(evt, cityName) {
    let i, tabcontent, tablinks;
		try{
		    tabcontent = document.getElementsByClassName("tabcontent");
		    for (i = 0; i < tabcontent.length; i++) {
		        tabcontent[i].style.display = "none";
		    }
		    tablinks = document.getElementsByClassName("tablinks");
		    for (i = 0; i < tablinks.length; i++) {
		        tablinks[i].className = tablinks[i].className.replace(" active", "");
		    }
		    document.getElementById(cityName).style.display = "block";
		    evt.currentTarget.className += " active";
		}catch(er){
			console.log(er)
		}
	}
}
