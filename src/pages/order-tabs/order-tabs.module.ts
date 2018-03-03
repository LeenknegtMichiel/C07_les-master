import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderTabsPage } from './order-tabs';
import { MenuPage } from '../menu/menu';

@NgModule({
  declarations: [
    OrderTabsPage,
    MenuPage
  ],
  imports: [
    IonicPageModule.forChild(OrderTabsPage),
  ]
})
export class OrderTabsPageModule {}
