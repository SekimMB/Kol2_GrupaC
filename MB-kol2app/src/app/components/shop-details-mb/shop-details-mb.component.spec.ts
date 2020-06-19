import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsMBComponent } from './shop-details-mb.component';

describe('ShopDetailsMBComponent', () => {
  let component: ShopDetailsMBComponent;
  let fixture: ComponentFixture<ShopDetailsMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
