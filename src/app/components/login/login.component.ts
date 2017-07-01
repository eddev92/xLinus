import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
// Components

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 // directives: [AppComponent]
})
export class LoginComponent {
	public loginMenu: boolean;
	public loginActivated: boolean;
	constructor(private appComponent : AppComponent) {}

	ngOnInit() {
		this.loginActivated = true;
			console.log(this.loginActivated, 'login activado');
		
	}
}
