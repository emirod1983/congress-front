import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyDashboardComponent } from './deputy-dashboard.component';

describe('DeputyDashboardComponent', () => {
  let component: DeputyDashboardComponent;
  let fixture: ComponentFixture<DeputyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeputyDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeputyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
