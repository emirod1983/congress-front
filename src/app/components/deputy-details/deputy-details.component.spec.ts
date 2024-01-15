import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeputyDetailsComponent } from './deputy-details.component';

describe('DeputyDetailsComponent', () => {
  let component: DeputyDetailsComponent;
  let fixture: ComponentFixture<DeputyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeputyDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeputyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
