import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  getPortfolioData(): Observable<any> {
    const mockData = {
      totalValue: 150000,
      allocation: {stocks:60, Bonds:30,Cash:10},
      performance: [120000, 130000, 125000, 150000],
      dates: ['Q1', 'Q2', 'Q3', 'Q4']
    };
    return of(mockData);
  }
}
