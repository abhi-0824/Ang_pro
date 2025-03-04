import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
})
export class ChartComponent implements OnChanges {
  @Input() filter!: string;
  barChartData: any[] = [];
  lineChartData: any[] = [];

  allData: Record<
    string,
    {
      bar: { name: string; value: number }[];
      line: { name: string; series: { name: string; value: number }[] }[];
    }
  > = {
    Monthly: {
      bar: [
        { name: 'Jan', value: 500 },
        { name: 'Feb', value: 700 },
      ],
      line: [
        {
          name: 'Sales',
          series: [
            { name: 'Jan', value: 500 },
            { name: 'Feb', value: 700 },
          ],
        },
      ],
    },
    Weekly: {
      bar: [
        { name: 'Week 1', value: 200 },
        { name: 'Week 2', value: 450 },
      ],
      line: [
        {
          name: 'Sales',
          series: [
            { name: 'Week 1', value: 200 },
            { name: 'Week 2', value: 450 },
          ],
        },
      ],
    },
    Daily: {
      bar: [
        { name: 'Mon', value: 50 },
        { name: 'Tue', value: 80 },
      ],
      line: [
        {
          name: 'Sales',
          series: [
            { name: 'Mon', value: 50 },
            { name: 'Tue', value: 80 },
          ],
        },
      ],
    },
  };

  ngOnChanges() {
    this.updateChartData();
  }

  updateChartData() {
    const data =
      this.allData[this.filter as keyof typeof this.allData] ||
      this.allData['Monthly'];
    this.barChartData = [...data.bar];
    this.lineChartData = [...data.line];
  }
}
