import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  username$: Observable<string>;

  constructor(private loginService: AuthService) { }

  ngOnInit() {
    this.username$ = this.loginService.checkLoggedInUser();
  }

  signOut() {
    this.loginService.logout();
  }

}
