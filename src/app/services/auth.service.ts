import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  errorMessage: string;
  token: string;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private afs: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          this.getAuthToken(user);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      }),
    );
  }

  async getAuthToken(user) {
    this.token = await user.getIdToken(false);
  }

  // Register

  async createUser(user) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then(async credential => {
          this.insertUserData(credential, user)
            .then((data) => {
              return resolve({
                success: true,
                message: 'User has been registered',
                data: { data }
              });
            });
        })
        .catch(err => {
          return reject({
            success: false,
            message: 'User unsuccessfuly registered',
            error: err.code
          });
        });
    });
  }

  // Login

  login(user) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(user.email, user.password)
        .then(credential => {

          console.log('User ID', credential.user.uid);

          return resolve({
            success: true,
            data: credential
          });
        })
        .catch(err => {
          return reject({
            success: false,
            message: err.code
          });
        });
    });
  }

  // Insert user's data to firebase after register

  async insertUserData(credential: firebase.auth.UserCredential, user) {

    const data = {
      email: user.email,
      diplayName: `${user.firstname} ${user.lastname}`,
      photoURL: user.photoURL,
      role: user.role
    };

    this.afs.doc(`users/${credential.user.uid}`).set(data).then(response => {
      return response;
    });

  }

  // Forget Password

  forgetPassword(userEmail) {
    return new Promise((resolve, reject) => {
      this.afAuth.sendPasswordResetEmail(userEmail)
        .then(() => {
          return resolve();
        }).catch(err => {
          return reject(err);
        });
    });
  }

  // Update user's data

  updateUserData(user) {
    console.log('Name: ', user.displayName);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    console.log('userREF:', userRef);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: user.role
    };
    console.log('DATA: ', data);
    return userRef.set(data, { merge: true });
  }

  // Sign Out

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/auth/login']);
  }
}
