import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface OrderData {
  date: string;
  numOfActiveOrders: number;
  numOfInactiveOrders: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private http = inject(HttpClient);

  getOrdersData(): Observable<OrderData[]> {
    return this.http.get<OrderData[]>('/assets/data.json');
  }

  filterData(data: OrderData[], filterType: string): OrderData[] {
    const now = new Date();

    switch (filterType) {
      case 'lastWeek':
        return data.filter((item) => {
          const itemDate = new Date(item.date);
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          return itemDate >= weekAgo && itemDate <= now;
        });

      case 'lastMonth':
        return data.filter((item) => {
          const itemDate = new Date(item.date);
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          return itemDate >= monthAgo && itemDate <= now;
        });

      case 'lastQuarter':
        return data.filter((item) => {
          const itemDate = new Date(item.date);
          const quarterAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
          return itemDate >= quarterAgo && itemDate <= now;
        });

      case 'lastSixMonths':
        return data.filter((item) => {
          const itemDate = new Date(item.date);
          const sixMonthsAgo = new Date(
            now.getTime() - 180 * 24 * 60 * 60 * 1000
          );
          return itemDate >= sixMonthsAgo && itemDate <= now;
        });

      default:
        return data;
    }
  }
}
