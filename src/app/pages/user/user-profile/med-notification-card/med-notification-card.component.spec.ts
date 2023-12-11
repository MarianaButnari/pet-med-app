import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedNotificationCardComponent } from './med-notification-card.component';

describe('MedNotificationCardComponent', () => {
  let component: MedNotificationCardComponent;
  let fixture: ComponentFixture<MedNotificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedNotificationCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
