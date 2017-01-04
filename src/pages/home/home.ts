import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  newTodo: String;

  constructor(public navCtrl: NavController, public af: AngularFire) {
    this.items = af.database.list('/items');
  }

  addTodo = (item) => {
    if (item) {
      this.items.push({
        "text": item,
        "isDone": false
      });
    }
  }

  deleteTodo = (item) => {
    if (item.isDone) {
      this.items.remove(item);
    }
  }

  updateTodo = (key, isDone) => {
    this.items.update(key, { isDone: isDone });
  }

  logoutButton = ()=>{
    console.log("Hello Logout");
    this.af.auth.logout();
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.setRoot(LoginPage);
    // this.navCtrl.setRoot(LoginPage).then( ()=>{
    //   this.af.auth.logout();
    // } );
   
     
  }

}
