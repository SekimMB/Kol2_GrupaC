import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemMBComponent } from './shop-item-mb.component';

describe('ShopItemMBComponent', () => {
  let component: ShopItemMBComponent;
  let fixture: ComponentFixture<ShopItemMBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemMBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemMBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
