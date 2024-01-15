import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenateDetailsComponent } from './senate-details.component';

describe('SenateDetailsComponent', () => {
  let component: SenateDetailsComponent;
  let fixture: ComponentFixture<SenateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SenateDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SenateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
