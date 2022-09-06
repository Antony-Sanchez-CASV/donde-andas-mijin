import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'donde-anda-mija';
  //group:Observable<any[]>;
  //list-of-group:Observable<any[]>;
  locates:Observable<any[]>;
  ///items:Observable<any[]>;
  constructor(firestore:AngularFirestore){
    this.locates=firestore.collection('locates').valueChanges();
  }
}
