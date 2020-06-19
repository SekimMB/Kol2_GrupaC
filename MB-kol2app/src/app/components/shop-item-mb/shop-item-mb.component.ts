import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-item-mb',
  templateUrl: './shop-item-mb.component.html',
  styleUrls: ['./shop-item-mb.component.css']
})
export class ShopItemMBComponent implements OnInit {
  @Input() image: string;
  @Input() text: string;
  @Input() id: number;

  constructor() {}

  ngOnInit(): void {}
}
