import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent {

	 constructor(private route: ActivatedRoute) {}

   ngOnInit() {}

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
