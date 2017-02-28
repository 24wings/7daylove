import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {RtnResult} from '../../types/index.d';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public router: Router, public http: Http , public userService: UserService) { }

  ngOnInit() {
  }

  notSingle() {
    var phone =localStorage.getItem('phone');
    this.http.get('/player/isFinishInfo', {
      search: 'phone=' + phone
    }).map(response => response.json())
    .toPromise().then((result:RtnResult) => {
      if(!result.data.isFinishInfo){
        this.router.navigate(['infoDetail']);
      }else{
        // 弹出参与配对的信息框
      }
    });
  }

}
