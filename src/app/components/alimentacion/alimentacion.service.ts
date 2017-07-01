import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { serviceConstant } from '../../core/core.services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlimentacionService {

	constructor(private serviceConstant: serviceConstant) {}

	getDates(): Observable<any> {
	return this.serviceConstant.get('alimentacionDates');
	}

}