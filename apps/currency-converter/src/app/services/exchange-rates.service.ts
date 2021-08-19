import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExchangeRate } from '@nwm/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  apiKey = '?access_key=2a8909b3c7544e577f43b4988aea0647';
  url = 'http://data.fixer.io/api/';

  /**
   * constructor
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get the historical data
   */
  get historicalRates(): Observable<ExchangeRate> {
    return this.http
      .get<ExchangeRate>(`${this.url}latest${this.apiKey}`)
      .pipe(map((data: ExchangeRate) => data));
  }

  /**
   * get the latest data
   * @param currencySymbols
   * @returns
   */
  latestRates(currencySymbols: string): Observable<ExchangeRate> {
    return this.http
      .get<ExchangeRate>(
        `${this.url}latest${this.apiKey}&symbols=${currencySymbols}`
      )
      .pipe(map((data: ExchangeRate) => data));
  }
}
