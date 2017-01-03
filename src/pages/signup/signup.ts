import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  }
  signupButton() {

  }
  backButton() {
    console.log("Login Working");
    this.navCtrl.pop();
  }

}
