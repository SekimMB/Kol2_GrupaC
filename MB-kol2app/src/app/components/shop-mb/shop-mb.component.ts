import {Component, Input, OnInit} from '@angular/core';
import {MBDataService} from "../../../services/mb-data.service";

@Component({
  selector: 'app-shop-mb',
  templateUrl: './shop-mb.component.html',
  styleUrls: ['./shop-mb.component.css']
})
export class ShopMBComponent implements OnInit {
  @Input() filterText: string;
  public items$: any;

  constructor(private service: MBDataService) {
  }


  ngOnInit() {
    this.getAll();
  }


  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });

  }
}
