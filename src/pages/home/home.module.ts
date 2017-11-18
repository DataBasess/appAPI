import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { PoloniexProvider } from '../../providers/poloniex/poloniex';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    HttpClientModule,
    IonicPageModule.forChild(HomePage)
  ],
  providers:[
    PoloniexProvider
  ]
})
export class HomePageModule {}
