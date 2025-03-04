// import {
//   Component,
//   OnInit,
//   ViewChild,
//   ElementRef,
//   inject,
//   signal,
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Chart, registerables } from 'chart.js';
// import { DateFilterComponent } from '../date-filter/date-filter.component';
// import { OrdersService, OrderData } from '../../services/OrdersService';

// Chart.register(...registerables);

// @Component({
//   selector: 'app-orders-chart',
//   standalone: true,
//   imports: [CommonModule, DateFilterComponent],
//   templateUrl: './orders-chart.component.html',
//   styleUrls: ['./orders-chart.component.css'],
// })
// export class OrdersChartComponent implements OnInit {
//   @ViewChild('ordersChart') private chartRef!: ElementRef;
//   private ordersService = inject(OrdersService);

//   private chart: Chart | null = null;
//   rawData = signal<OrderData[]>([]);
//   filteredData = signal<OrderData[]>([]);

//   ngOnInit() {
//     this.loadData();
//   }

//   loadData() {
//     this.ordersService.getOrdersData().subscribe((data) => {
//       this.rawData.set(data);
//       this.processChartData('all');
//     });
//   }

//   onFilterChanged(filter: string) {
//     this.processChartData(filter);
//   }

//   processChartData(filter: string) {
//     const filteredData = this.ordersService.filterData(this.rawData(), filter);
//     this.filteredData.set(filteredData);

//     const sortedData = filteredData.sort(
//       (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//     );

//     const labels = sortedData.map((item) =>
//       new Date(item.date).toLocaleDateString()
//     );
//     const activeOrders = sortedData.map((item) => item.numOfActiveOrders);
//     const inactiveOrders = sortedData.map((item) => item.numOfInactiveOrders);

//     this.renderChart(labels, activeOrders, inactiveOrders);
//   }

//   renderChart(
//     labels: string[],
//     activeOrders: number[],
//     inactiveOrders: number[]
//   ) {
//     if (this.chart) {
//       this.chart.destroy();
//     }

//     const ctx = this.chartRef.nativeElement.getContext('2d');
//     this.chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             type: 'bar',
//             label: 'Active Orders',
//             data: activeOrders,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//           {
//             type: 'line',
//             label: 'Inactive Orders',
//             data: inactiveOrders,
//             backgroundColor: 'rgba(255, 99, 132, 0.6)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 2,
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Number of Orders',
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Date',
//             },
//           },
//         },
//         plugins: {
//           title: {
//             display: true,
//             text: 'Orders Overview',
//           },
//         },
//       },
//     });
//   }
// }

// import {
//   Component,
//   OnInit,
//   ViewChild,
//   ElementRef,
//   inject,
//   signal,
// } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Chart, registerables } from 'chart.js';
// import { DateFilterComponent } from '../date-filter/date-filter.component';
// import { OrdersService, OrderData } from '../../services/OrdersService';

// Chart.register(...registerables);

// @Component({
//   selector: 'app-orders-chart',
//   standalone: true,
//   imports: [CommonModule, DateFilterComponent],
//   templateUrl: './orders-chart.component.html',
//   styleUrls: ['./orders-chart.component.css'],
// })
// export class OrdersChartComponent implements OnInit {
//   @ViewChild('ordersChart') private chartRef!: ElementRef;
//   private ordersService = inject(OrdersService);

//   private chart: Chart | null = null;
//   rawData = signal<OrderData[]>([]);
//   filteredData = signal<OrderData[]>([]);

//   ngOnInit() {
//     this.loadData();
//   }

//   loadData() {
//     this.ordersService.getOrdersData().subscribe((data) => {
//       this.rawData.set(data);
//       this.processChartData('all');
//     });
//   }

//   onFilterChanged(filter: string) {
//     this.processChartData(filter);
//   }

//   processChartData(filter: string) {
//     const filteredData = this.ordersService.filterData(this.rawData(), filter);
//     this.filteredData.set(filteredData);

//     const sortedData = filteredData.sort(
//       (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
//     );

//     let labels: string[] = [];

//     if (filter === 'lastWeek') {
//       labels = sortedData.map((item) =>
//         new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' })
//       ); // e.g., "Mon", "Tue"
//     } else if (filter === 'lastMonth' || filter === 'lastQuarter') {
//       labels = sortedData.map((item) =>
//         new Date(item.date).toLocaleDateString('en-US', {
//           day: '2-digit',
//           month: 'short',
//         })
//       ); // e.g., "15-Feb"
//     } else if (filter === 'last6Months') {
//       labels = sortedData.map((item) =>
//         new Date(item.date).toLocaleDateString('en-US', { month: 'long' })
//       ); // e.g., "January"
//     } else {
//       labels = sortedData.map((item) =>
//         new Date(item.date).toLocaleDateString()
//       ); // Default format
//     }

//     const activeOrders = sortedData.map((item) => item.numOfActiveOrders);
//     const inactiveOrders = sortedData.map((item) => item.numOfInactiveOrders);

//     this.renderChart(labels, activeOrders, inactiveOrders);
//   }

//   renderChart(
//     labels: string[],
//     activeOrders: number[],
//     inactiveOrders: number[]
//   ) {
//     if (this.chart) {
//       this.chart.destroy();
//     }

//     const ctx = this.chartRef.nativeElement.getContext('2d');
//     this.chart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             type: 'bar',
//             label: 'Active Orders',
//             data: activeOrders,
//             backgroundColor: 'rgba(75, 192, 192, 0.6)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1,
//           },
//           {
//             type: 'line',
//             label: 'Inactive Orders',
//             data: inactiveOrders,
//             backgroundColor: 'rgba(255, 99, 132, 0.6)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 2,
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//           y: {
//             beginAtZero: true,
//             title: {
//               display: true,
//               text: 'Number of Orders',
//             },
//           },
//           x: {
//             title: {
//               display: true,
//               text: 'Date',
//             },
//           },
//         },
//         plugins: {
//           title: {
//             display: true,
//             text: 'Orders Overview',
//           },
//         },
//       },
//     });
//   }
// }

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { OrdersService, OrderData } from '../../services/OrdersService';

Chart.register(...registerables);

@Component({
  selector: 'app-orders-chart',
  standalone: true,
  imports: [CommonModule, DateFilterComponent],
  templateUrl: './orders-chart.component.html',
  styleUrls: ['./orders-chart.component.css'],
})
export class OrdersChartComponent implements OnInit {
  @ViewChild('ordersChart') private chartRef!: ElementRef;
  private ordersService = inject(OrdersService);

  private chart: Chart | null = null;
  rawData = signal<OrderData[]>([]);
  filteredData = signal<OrderData[]>([]);

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.ordersService.getOrdersData().subscribe((data) => {
      this.rawData.set(data);
      this.processChartData('lastWeek'); // ✅ Default filter set to "Last Week"
    });
  }

  onFilterChanged(filter: string) {
    this.processChartData(filter);
  }

  processChartData(filter: string) {
    const filteredData = this.ordersService.filterData(this.rawData(), filter);
    this.filteredData.set(filteredData);

    const sortedData = filteredData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    let labels: string[] = [];
    let groupedData: { [key: string]: { active: number; inactive: number } } =
      {};

    if (filter === 'lastWeek') {
      labels = sortedData.map((item) =>
        new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' })
      ); // e.g., "Mon", "Tue"
    } else if (filter === 'lastMonth' || filter === 'lastQuarter') {
      labels = sortedData.map((item) =>
        new Date(item.date).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
        })
      ); // e.g., "15-Feb"
    } else if (filter === 'last6Months') {
      sortedData.forEach((item) => {
        const monthLabel = new Date(item.date).toLocaleDateString('en-US', {
          month: 'long',
        }); // e.g., "January"

        if (!groupedData[monthLabel]) {
          groupedData[monthLabel] = { active: 0, inactive: 0 };
        }

        groupedData[monthLabel].active += item.numOfActiveOrders;
        groupedData[monthLabel].inactive += item.numOfInactiveOrders;
      });

      labels = Object.keys(groupedData); // ✅ Now only months will be shown
    } else {
      labels = sortedData.map((item) =>
        new Date(item.date).toLocaleDateString('en-US')
      ); // Default format
    }

    const activeOrders =
      filter === 'last6Months'
        ? Object.values(groupedData).map((data) => data.active)
        : sortedData.map((item) => item.numOfActiveOrders);

    const inactiveOrders =
      filter === 'last6Months'
        ? Object.values(groupedData).map((data) => data.inactive)
        : sortedData.map((item) => item.numOfInactiveOrders);

    this.renderChart(labels, activeOrders, inactiveOrders);
  }

  renderChart(
    labels: string[],
    activeOrders: number[],
    inactiveOrders: number[]
  ) {
    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = this.chartRef.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            type: 'bar',
            label: 'Active Orders',
            data: activeOrders,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            type: 'line',
            label: 'Inactive Orders',
            data: inactiveOrders,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Orders',
            },
          },
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Orders Overview',
          },
        },
      },
    });
  }
}
