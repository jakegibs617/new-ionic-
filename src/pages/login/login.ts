import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FacebookAuth, User, AuthLoginResult } from '@ionic/cloud-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginDetails: AuthLoginResult;

  constructor(private facebook: FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  async login():Promise<void>{
    // try {
      this.loginDetails = await this.facebook.login()
      // console.log(this.loginDetails);
    // }
    // catch(e){
    //   console.error(e);
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
