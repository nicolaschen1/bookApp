import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyC6EYs-hV83x9FCTnjN8_l4Tw6RiT_spEA",
      authDomain: "bookappangular.firebaseapp.com",
      databaseURL: "https://bookappangular.firebaseio.com",
      projectId: "bookappangular",
      storageBucket: "bookappangular.appspot.com",
      messagingSenderId: "428745259541"
    };
    firebase.initializeApp(config);
  }
}
