import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  password: string;
  username: string;

  constructor(private router: Router, private loginService: AuthService) {
    this.password = '';
    this.username = '';
  }

  ngOnInit() {
  }

  backHomeClick() {
    this.router.navigateByUrl('/home');
  }

  loginClick(login) {
    this.loginService.login(login.value.username, login.value.password);
  }

}
