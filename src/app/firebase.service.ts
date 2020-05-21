import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  public authRef = null;
  public firestoreRef = null;
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
    this.firestoreRef = firebase.firestore();

  }
  getFireStore() {
    if (!this.firestoreRef) {
      this.firestoreRef = firebase.firestore();
    }
    return this.firestoreRef;
  }
}
