import { Component, Input } from '@angular/core';

// Thirdparty
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent {

	@Input() title: string = 'Sales Dpt.';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  
 

}
