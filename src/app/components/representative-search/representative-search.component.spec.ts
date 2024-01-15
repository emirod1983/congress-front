import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeSearchComponent } from './representative-search.component';

describe('RepresentativeSearchComponent', () => {
  let component: RepresentativeSearchComponent;
  let fixture: ComponentFixture<RepresentativeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepresentativeSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepresentativeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
