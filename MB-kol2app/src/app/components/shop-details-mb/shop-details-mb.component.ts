import { Component, OnInit } from '@angular/core';
import {MBDataService} from "../../../services/mb-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop-details-mb',
  templateUrl: './shop-details-mb.component.html',
  styleUrls: ['./shop-details-mb.component.css']
})
export class ShopDetailsMBComponent implements OnInit {
  public image = '';
  public text: string;
  public id: number;
  public title: string;

  constructor(private dataService: MBDataService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.dataService.getById(id).subscribe(res => {
      this.image = res['url'];
      this.text = res['content'];
      this.title = res['title'];
    });
  }
}
