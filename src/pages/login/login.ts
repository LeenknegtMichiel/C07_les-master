import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { OrderTabsPage } from '../order-tabs/order-tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    email: "",
    password: ""
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userService: UserServiceProvider,
    private menuCtrl:MenuController
  ) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    console.log('Tried to login.');
    this.userService.login(this.user.email,this.user.password).then((result)=>{
      if(this.userService.isLoggedIn){
        //if auth succes, go to home
        this.navCtrl.setRoot(OrderTabsPage);
      }
    })

    // if auth success, go to home
    this.navCtrl.setRoot(OrderTabsPage);
  }
}
