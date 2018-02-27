import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from "ionic-angular";

@Injectable()
export class UserServiceProvider {
  isLoggedIn:boolean=false;
  constructor(public afAuth: AngularFireAuth, private toastCtrl: ToastController) {
    console.log('Hello UserServiceProvider Provider');
  }
  
  login(email:string,password:string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password)
    .then((result)=>{
      console.log("login result",result);
      this.isLoggedIn= true;
    }).catch((error)=>{
      console.log("error during login",error);
      this.presentToast(error.message);
      this.isLoggedIn=false;
    })
  }
  logout(){
    this.afAuth.auth.signOut();
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: 'User was not found',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
