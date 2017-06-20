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
	public RegisterSize:any[];
	public talla:any;
	public peso:any;
	public emptyBlock:boolean;
	constructor(private saludService: SaludService,
	 				public route: ActivatedRoute) {
		this.Registers = [
			{	
				name:'',
				peso:''
			}
		];
		this.RegisterSize = [
			{	
				name:'',
				peso:''
			}
		];
	}



  public ngOnInit() {
  	this.saludService.getRegisters().subscribe(
     data => {       
     	this.Registers = data;
     	console.log(this.Registers.length,"cant peso")
       console.log(this.Registers, "Peso")
      },
      error => {
      	console.log(error, "error =/")
      }
   	);

   this.saludService.getSizes().subscribe(
     data => {       
     	this.RegisterSize = data;
     	     	console.log(this.RegisterSize.length,"cant talla")

     	     	this.RegisterSize.length===0 ?this.emptyBlock=true:false;

        console.log(this.RegisterSize, "Talla")
      },
      error => {
      	console.log(error, "error =/")
      }
   	);	
  }

  public SaveWeight(user:any){
  	console.log(user);
   	this.Registers.push({fecha: user.fecha, peso: user.peso })
  }

    public SaveSize(size:any){
  	console.log(size);
  	this.RegisterSize.push({fecha: size.fecha, talla: size.talla })
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
		}catch(er){
			console.log(er)
		}
	}
}
