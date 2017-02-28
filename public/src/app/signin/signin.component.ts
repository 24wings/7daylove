import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RtnResult, User } from '../../types/index.d';
import { UserService } from '../user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = { phone: '', password: '' };
  constructor(public http: Http, public userService: UserService, public router: Router) {
    this.user.phone = localStorage.getItem('phone') ? localStorage.getItem('phone') : '';
    this.user.password = localStorage.getItem('password') ? localStorage.getItem('password') : '';
    if (this.user.phone && this.user.password) {
      this.login();
    }

  }

  ngOnInit() {

  }
  goSignup() {
    this.router.navigate(['signup']);
  }
  goForgotPassword() {
    this.router.navigate(['forgotPassword']);
  }

  login() {
    this.http.get('/player/getPlayerInfo', {
      search: `phone=${this.user.phone}&password=${this.user.password}`
    }).map(response => response.json()).toPromise()
      .then((result: RtnResult) => {
        if (result.issuccess) {
          var user = result.data;
          localStorage.setItem('phone', user.phone + '');
          localStorage.setItem('password', user.password);
          this.userService.user = user;
          this.router.navigate(['index']);


        } else {
          alert(result.errorMsg);
        }
      });


  }
}
