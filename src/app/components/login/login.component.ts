import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
// Services
import { LoginService } from '../login/login.service';
export interface IUser {
	id: number;
	user: string;
	name: string;
	lastname: string; 
	phone: string;
	address: string;
	email: string;
	fecha: Date;
}

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 providers: [LoginService]
})

export class LoginComponent {
	public loginMenu: boolean;
	public loginActivated: boolean;
	constructor(private appComponent : AppComponent,
				private loginService : LoginService,
				) {}

	ngOnInit() {
		this.loginActivated = true;
			console.log(this.loginActivated, 'login activado');
	}

	public onAuth(user) {
		console.log(user)
		const body = {
			user : user.user,
			password : user.password
		}
		console.log(body,'body')
		this.loginService.getAuth(body).subscribe(
			data =>{
			console.log(data)				
		},
		error => {
			
		}
		);
	}
}
