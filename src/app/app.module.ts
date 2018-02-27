import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { StoreDetailPage } from '../pages/store-detail/store-detail';

import { AuthProvider } from '../providers/auth/auth';
import { StoreProvider } from '../providers/store/store';
import { OrderTabsPage } from '../pages/order-tabs/order-tabs';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

var config = {
  apiKey: "AIzaSyDGeFSiKaUOoh6Zpno1gSA8WNooggUaCcQ",
  authDomain: "c0-7-3448d.firebaseapp.com",
  databaseURL: "https://c0-7-3448d.firebaseio.com",
  projectId: "c0-7-3448d",
  storageBucket: "c0-7-3448d.appspot.com",
  messagingSenderId: "334316351754"
};

@NgModule({
  declarations: [
    MyApp,
    StoreDetailPage,
    LoginPage,
    OrderTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoreDetailPage,
    OrderTabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    StoreProvider,
    UserServiceProvider
  ]
})
export class AppModule {}