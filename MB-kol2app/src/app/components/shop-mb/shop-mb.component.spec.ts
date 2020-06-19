import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMBComponent } from './shop-mb.component';

describe('ShopMBComponent', () => {
  let component: ShopMBComponent;
  let fixture: ComponentFixture<ShopMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
