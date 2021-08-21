import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HistoryComponent } from './history.component';

describe(HistoryComponent.name, () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, MatIconModule],
      declarations: [HistoryComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a card title', () => {
    const cards = Array.from(document.getElementsByTagName('mat-card'));
    cards.forEach((card) => {
      const title = card
        .getElementsByTagName('mat-card-title')[0]
        .textContent?.trim();

      expect(title).toEqual('Historical Currency Exchange Rates');
    });
  });
});
