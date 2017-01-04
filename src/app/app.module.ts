import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { AngularFireModule ,FIREBASE_PROVIDERS, defaultFirebase,
  AngularFire, firebaseAuthConfig, AuthProviders,
  AuthMethods} from 'angularfire2';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBCyR5FkA8HhQRbJVExi_i883N3WgICw0Y',
  authDomain: 'todo2-1eaf8.firebaseapp.com',
  databaseURL: 'https://todo2-1eaf8.firebaseio.com',
  storageBucket: 'todo2-1eaf8.appspot.com',
  messagingSenderId: "534320814263"
};

export const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig , FirebaseAuthConfig),
  
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: []
})
export class AppModule { }
