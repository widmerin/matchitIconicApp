import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PlayersPage } from '../pages/players/players';
import { StatsPage } from '../pages/stats/stats';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Camera } from '@ionic-native/camera';  

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlayerModalPage } from '../pages/players/modal-page';


@NgModule({
  declarations: [
    MyApp,
    PlayersPage,
    StatsPage,
    HomePage,
    TabsPage,
    PlayerModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PlayersPage,
    StatsPage,
    HomePage,
    TabsPage,
    PlayerModalPage
  ],
  providers: [
    Camera,    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
