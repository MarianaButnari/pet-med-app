import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthSummaryComponent } from './health-summary.component';

describe('HealtSummaryComponent', () => {
  let component: HealthSummaryComponent;
  let fixture: ComponentFixture<HealthSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
