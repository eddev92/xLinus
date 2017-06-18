import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { serviceConstant } from '../../core/core.services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaludService {

	constructor(private serviceConstant: serviceConstant) {}

	getRegisters(): Observable<any> {

	return this.serviceConstant.get('peso').map((res:Response) => res.json());
	  }

}