import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExchangeRate, Rates } from '@nwm/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'nwm-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  // public variables
  exchangeRate!: Rates;
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
          this.exchangeRate = data.rates;
        },
      });
  }

  /**
   * unsubscribe from subscriptions
   */
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
