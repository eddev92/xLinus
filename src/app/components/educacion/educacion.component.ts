import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// Services
import { EducacionService } from '../educacion/educacion.service';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
  providers: [EducacionService]
})
export class EducacionComponent implements OnInit {
  public gardens: any[];
  constructor(private educacionService : EducacionService) {}
    foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  public ngOnInit() {
    this.educacionService.getGardens().subscribe(
      data => {
        console.log(data,'data')
        this.gardens = data;
      },
      error => {

      });
  }

}
