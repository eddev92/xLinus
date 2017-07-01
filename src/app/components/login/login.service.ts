import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { serviceConstant } from '../../core/core.services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

	constructor(private serviceConstant: serviceConstant) {}

	getAuth(params: any): Observable<any> {
	return this.serviceConstant.post('login', params);
	}

}