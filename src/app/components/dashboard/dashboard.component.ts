import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByComponent } from '../sort-by/sort-by.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SortByComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  selectedFilter = 'Last Week';

  updateFilter(filter: string) {
    this.selectedFilter = filter;
  }
}
