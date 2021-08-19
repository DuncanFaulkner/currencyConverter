/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchangeRate } from '@nwm/models';
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
  baseTime!: Date;

  /**
   * constructor
   * @param exchangeRateService
   */
  constructor(private exchangeRateService: ExchangeRatesService) {}
  /**
   *variable to keep track of subscriptions
   */
  private unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.exchangeRateService.historicalRates
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data: ExchangeRate) => {
          this.exchangeRate = data;
          this.baseTime = new Date(this.exchangeRate.timestamp * 1000);
        },
      });
  }

  /**
   * unsubscribe from subscriptions
   */
  ngOnDestroy = () => {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };
}
