import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { PoloniexProvider } from '../providers/poloniex/poloniex';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyB0iaYCvWATHZy8Azw41m4f7Yh56L3Y-x8",
        authDomain: "app-host-2c179.firebaseapp.com",
        databaseURL: "https://app-host-2c179.firebaseio.com",
        projectId: "app-host-2c179",
        storageBucket: "app-host-2c179.appspot.com",
        messagingSenderId: "524328248116"  
      }
    ),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PoloniexProvider
  ]
})
export class AppModule {}
