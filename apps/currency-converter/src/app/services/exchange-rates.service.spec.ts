import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  let service: ExchangeRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(ExchangeRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
