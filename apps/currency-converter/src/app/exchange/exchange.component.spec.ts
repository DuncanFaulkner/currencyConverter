import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExchangeComponent } from './exchange.component';

describe('ExchangeComponent', () => {
  let component: ExchangeComponent;
  let fixture: ComponentFixture<ExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExchangeComponent],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        MatDividerModule,
        MatCardModule,
      ],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
