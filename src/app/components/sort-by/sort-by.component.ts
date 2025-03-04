import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SortByComponent {
  @Output() filterChanged = new EventEmitter<string>();
  sortOptions = ['Monthly', 'Weekly', 'Daily'];

  selectSort(option: string) {
    this.filterChanged.emit(option);
  }
}
