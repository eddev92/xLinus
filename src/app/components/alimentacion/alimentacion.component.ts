import { Component, OnInit } from '@angular/core';
import { AlimentacionService } from './../alimentacion/alimentacion.service';

@Component({
  selector: 'alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.css'],
  providers: [AlimentacionService]
})
export class AlimentacionComponent {
	public date1: any[];
	public date2: any[];

	constructor(private alimentacionService : AlimentacionService) {}

	ngOnInit() {
		this.alimentacionService.getDates().subscribe(
			data => {
				console.log(data, "fechas")
				this.date1 = data.fecha1;
				this.date2 = data.fecha2;
				console.log(this.date1);
				console.log(this.date2);

			},
			error => {

				}
			)
	}
}
