import { Injectable } from '@angular/core';
import { Http, Response} from "@angular/http";
import { serviceConstant } from '../../core/core.services';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EducacionService {

	constructor(private serviceConstant: serviceConstant) {}

	getGardens(): Observable<any> {
	return this.serviceConstant.post('garden',);
    }

    getGardensAddress(): Observable<any> {
        return this.serviceConstant.get('gardenAddress');
    }

}