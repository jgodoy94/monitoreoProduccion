import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-principal-graphics',
  templateUrl: './principal-graphics.component.html',
  styleUrls: ['./principal-graphics.component.css']
})

export class PrincipalGraphicsComponent {

  etiqueta: String = 'Producción General';
  clonacionClone: Number = 50;
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
                                {data: [this.produccionClone], label: 'Producción'}];

}
