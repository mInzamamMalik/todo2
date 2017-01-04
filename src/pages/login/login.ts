import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

import * as firebase from 'firebase'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public user = {};
  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in       
        console.log("User", user);
        this.navCtrl.push(TabsPage);
      }else {
        // user not logged in
       
        console.log("User not login",user);
        // this.navCtrl.setRoot(LoginPage);
      }
    });
  }
  loginButton() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    });
  }

}