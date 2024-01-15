import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenateDashboardComponent } from './senate-dashboard.component';

describe('SenateDashboardComponent', () => {
  let component: SenateDashboardComponent;
  let fixture: ComponentFixture<SenateDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenateDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
