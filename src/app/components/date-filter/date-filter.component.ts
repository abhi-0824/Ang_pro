import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DateFilterOption {
  label: string;
  value: 'lastWeek' | 'lastMonth' | 'lastQuarter' | 'lastSixMonths';
}

@Component({
  selector: 'app-date-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css'],
})
export class DateFilterComponent {
  filterChanged = output<string>();

  filterOptions = input<DateFilterOption[]>([
    { label: 'Last Week', value: 'lastWeek' },
    { label: 'Last Month', value: 'lastMonth' },
    { label: 'Last Quarter', value: 'lastQuarter' },
    { label: 'Last 6 Months', value: 'lastSixMonths' },
  ]);

  onFilterChange(event: Event) {
    const selectedFilter = (event.target as HTMLSelectElement).value;
    this.filterChanged.emit(selectedFilter);
  }
}
