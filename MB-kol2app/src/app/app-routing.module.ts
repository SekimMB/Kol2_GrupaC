import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopMBComponent} from "./components/shop-mb/shop-mb.component";
import {ShopDetailsMBComponent} from "./components/shop-details-mb/shop-details-mb.component";

const routes: Routes = [
  {
    path: '',
    component: ShopMBComponent,
  },
  {
    path: 'blog/detail/1/:id',
    component: ShopDetailsMBComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
