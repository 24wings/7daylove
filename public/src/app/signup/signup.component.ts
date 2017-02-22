import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User, RtnResult } from '../../types/index.d';
import { ModalDirective } from 'ng2-bootstrap';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('alertModal') public alertModal: ModalDirective;
  newUser: User = {
    name:'杨杰',
    phone: '13212780816',
    password: '123'
  };
  signupError: string = '';

  constructor(public router: Router, public http: Http, public userService: UserService) { }

  ngOnInit() {
  }

  signup() {
    this.http.post('/player/addPlayer', {
    }, {
        body: {
          name:this.newUser.name,
          phone:this.newUser.phone.toString(),
          password: this.newUser.password
        }
      }).map(response => response.json())
      .toPromise().then((result: RtnResult) => {
        if (!result.issuccess) {
          this.signupError = result.errorMsg;
        } else {
          this.userService.user=result.data;
        }
        this.alertModal.show();
      });
  }

  goInfoDetail() {
    this.router.navigate(['infoDetail']);
  }
  goIndex(){
    this.router.navigate(['index']);
  }

}
