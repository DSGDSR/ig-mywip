import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMgtComponent } from './supplier-mgt.component';

describe('SupplierMgtComponent', () => {
  let component: SupplierMgtComponent;
  let fixture: ComponentFixture<SupplierMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
