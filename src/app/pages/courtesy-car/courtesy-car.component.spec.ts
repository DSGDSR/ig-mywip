import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtesyCarComponent } from './courtesy-car.component';

describe('CourtesyCarComponent', () => {
  let component: CourtesyCarComponent;
  let fixture: ComponentFixture<CourtesyCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtesyCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtesyCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
