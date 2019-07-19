import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingviewChartsComponent } from './tradingview-charts.component';

describe('TradingviewChartsComponent', () => {
  let component: TradingviewChartsComponent;
  let fixture: ComponentFixture<TradingviewChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingviewChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingviewChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
