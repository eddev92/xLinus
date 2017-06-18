import { Injectable,Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { CoreConstants } from './core.constants';

@Injectable()
export class serviceConstant {
  @Input() active : boolean

    constructor(private http: Http) {}
    ngOnInit(){}

    public get    (url, parameters?) {return this.fetch(url, 'get',     parameters)};
    public post   (url, parameters?) {return this.fetch(url, 'post',     parameters)};
    public put    (url, parameters?) {return this.fetch(url, 'put',     parameters)};
    public delete (url, parameters?) {return this.fetch(url, 'delete',   parameters)};

    private fetch(url, type, parameters?): Observable<any> {
     let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
      let options = new RequestOptions({ headers: headers });


      return this.http[CoreConstants.APP_MOCK ? 'get' : type]
              (CoreConstants.API_REST + url + (CoreConstants.APP_MOCK ? '.json' : ''), parameters)
              .delay(100)
              .map(this.extractData)
              .catch(this.handleError)
    }


    private extractData(res:Response) {
      //res.headers.set("Access-Control-Allow-Origin","*");

      let body = res.json();

      if (body){
        return body.data || body
      } else {
        return {}
      }
    }

    private handleError(error:any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
