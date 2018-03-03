import { Component } from '@angular/core';
import { NavController, IonicPage, App } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public app:App
  ) 
  {
    
  }

  /*
  method die gefired wordt wanneer de pagina klaar is
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  order(){
    console.log("tried going to menu page with tabs")
    this.navCtrl.setRoot(MenuPage);
  
  }
 
}
