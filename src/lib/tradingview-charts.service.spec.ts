import { TestBed } from '@angular/core/testing';

import { TradingviewChartsService } from './tradingview-charts.service';

describe('TradingviewChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradingviewChartsService = TestBed.get(TradingviewChartsService);
    expect(service).toBeTruthy();
  });
});
