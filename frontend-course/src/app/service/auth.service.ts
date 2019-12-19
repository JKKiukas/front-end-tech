import {Injectable, NgZone} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(public afAuth: AngularFireAuth,
              public router: Router) {
    this.afAuth.authState.subscribe(user => {
        if (user != null) {
          this.userEmail.next(user.email);
        }
      }
    );
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['admin']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  logout() {
    return this.afAuth.auth.signOut().then(() => {
      this.userEmail.next('');
      this.router.navigate(['adminLogin']);
    });

  }

  getLoggedInUser(): any {
    return this.afAuth.authState;
  }

  checkLoggedInUser(): Observable<any> {
    return this.userEmail;
  }

  /*get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }*/
}
