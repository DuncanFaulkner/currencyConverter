/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchangeRate, Rates } from '@nwm/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  exchangeRate!: ExchangeRate;
  rates!: Rates;

  constructor(private exchangeRateService: ExchangeRatesService) {}
  private unsubscribe$: Subject<void> = new Subject<void>();

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.exchangeRateService.histricalRates
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data: ExchangeRate) => {
          this.exchangeRate = data;
          this.rates = data.rates;
          console.log(this.rates);
        },
      });
    // this.rates.subscribe((data) => {
    //   console.log(data[0]?.rates);
    // });
  }

  ngOnDestroy = () => {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}
