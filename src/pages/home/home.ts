import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: FirebaseListObservable<any[]>;
  newTodo: String;

  constructor(public navCtrl: NavController, af: AngularFire) {
    this.items = af.database.list('/items');
  }  

  addTodo = (item) => {
    if (item) {
      this.items.push(item);
    }
  }

  deleteTodo = (item)=>{
    this.items.remove(item);
  }

}
