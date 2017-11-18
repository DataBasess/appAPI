import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PoloniexProvider } from '../../providers/poloniex/poloniex';
import * as TradingApi from 'poloniex-api';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

   constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public Poloniex:PoloniexProvider
  ) {
    
  }

  async ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    /* const APIKEY = 'ZNZP38IM-465PDW4K-E6IILLYQ-4LZVKFVA';
    const SECRET = '22c1780b28aada708817cd3cbf7067aa8551206f633b06629bb41badba9e3e195773f33e9edde57c7d3c692cfbeabbed32790c1fd7a1d368ba4cd47d6006da2c';
    const tradingApi = TradingApi.create(APIKEY, SECRET);
    //const tradingApi = TradingApi.create(APIKEY, SECRET, true);
    await tradingApi.returnBalances()
    .then((msg) => {
        console.log(msg);
    })
    .catch(err => console.log(err)); */
    
    
  }

}
