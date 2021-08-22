/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ExchangeRate, Rates } from '@nwm/models';
import { HttpClientMock } from '../mock/http-client.mock';
import { ExchangeRatesService } from './exchange-rates.service';

fdescribe(ExchangeRatesService.name, () => {
  let service: ExchangeRatesService;

  const exchangeRate: ExchangeRate = {
    success: true,
    timestamp: 0,
    base: 'EUR',
    date: '',
    rates: <Rates>{},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HttpClient, HttpHandler],
    });

    service = TestBed.inject(ExchangeRatesService);
  });

  it('should exist', () => {
    // assert
    expect(service).toBeDefined();
  });

  describe('General', () => {
    let service: ExchangeRatesService;
    let http: HttpClientMock;

    beforeEach(() => {
      http = new HttpClientMock();
      service = new ExchangeRatesService(http as any);
    });

    describe('historicalRates', () => {
      it('hits correct route', async () => {
        // arrange
        const path =
          'http://data.fixer.io/api/latest?access_key=2a8909b3c7544e577f43b4988aea0647';
        http.lastUrl = '';

        // act
        await service.historicalRates.toPromise();

        // assert

        expect(http.lastUrl).toBe(path);
      });
      it('is a GET call ', async () => {
        // arrange
        http.lastHttpMethod = null;

        // act
        await service.historicalRates.toPromise();

        // assert
        expect(http.lastHttpMethod).toBe('GET');
      });

      it('returns exhange base rate', async () => {
        // arrange
        http.response = { base: 'EUR' };

        // act
        const result = await service.historicalRates.toPromise();

        // assert
        expect(result.base).toBe('EUR');
      });
    });

    describe('LatestRates', () => {
      it('hits correct route', async () => {
        // arrange
        const path =
          'http://data.fixer.io/api/latest?access_key=2a8909b3c7544e577f43b4988aea0647&symbols=GBP';
        http.lastUrl = '';

        // act
        await service.latestRates('GBP').toPromise();

        // assert

        expect(http.lastUrl).toBe(path);
      });
      it('is a GET call ', async () => {
        // arrange
        http.lastHttpMethod = null;

        // act
        await service.latestRates('GBP').toPromise();

        // assert
        expect(http.lastHttpMethod).toBe('GET');
      });

      it('returns exhange base rate', async () => {
        // arrange
        http.response = { base: 'EUR' };

        // act
        const result = await service.latestRates('GBP').toPromise();

        // assert
        expect(result.base).toBe('EUR');
      });
    });
  });
});
