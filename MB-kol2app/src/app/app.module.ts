import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopMBComponent } from './components/shop-mb/shop-mb.component';
import { ShopItemMBComponent } from './components/shop-item-mb/shop-item-mb.component';
import { ShopDetailsMBComponent } from './components/shop-details-mb/shop-details-mb.component';
import {MBDataService} from "../services/mb-data.service";

@NgModule({
  declarations: [
    AppComponent,
    ShopMBComponent,
    ShopItemMBComponent,
    ShopDetailsMBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MBDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
