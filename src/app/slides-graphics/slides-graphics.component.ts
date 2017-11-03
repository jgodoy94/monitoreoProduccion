import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides-graphics',
  templateUrl: './slides-graphics.component.html',
  styleUrls: ['./slides-graphics.component.css']
})
export class SlidesGraphicsComponent {

  etiqueta: String = 'Producción General';
  clonacionClone: Number = 50;
  emparejamientoClone: Number = 50;
  controlCalidadClone: Number = 50;
  produccionClone: Number = 50;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: String[] = [this.etiqueta];
  public barChartType: String = 'bar';
  public barChartLegend: Boolean = true;
  ///public barChartColor: String[] = ['orange', 'blue'];

  public barChartData: any[] = [{data: [this.clonacionClone], label: 'Clonación'},
                                {data: [this.emparejamientoClone], label: 'Emparejamiento'},
                                {data: [this.controlCalidadClone], label: 'Control de Calidad'},
                                {data: [this.produccionClone], label: 'Producción'}];

  public barChartColors: Array<any> = [{
    backgroundColor: '#ff8000',
    borderColor: '#ff8000'
  }, { // verde
    backgroundColor: '#70D3FF',
    borderColor: '#70D3FF'
  }, { // verde
    backgroundColor: '#C560FF',
    borderColor: '#C560FF'
  }, {
    backgroundColor: '#01A9DB',
    borderColor: '#01A9DB'
  }];

}
