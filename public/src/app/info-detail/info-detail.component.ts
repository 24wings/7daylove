import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  allRadioQuestions: any= [];
  allAnwserQuestions: any= [];
  constructor(public http: Http) {
    this.http.get('/player/allRadioQuestions').
    map(response => response.json())
    .toPromise()
    .then(rtn => {
 this.allRadioQuestions = rtn.data;

    });
    this.http.get('/player/allAnwserQuestions')
    .map(response => response.json())
    .toPromise()
    .then(rtn => {
      if (rtn.issuccess) {
        this.allAnwserQuestions = rtn.data;
      }
    });
   }

  ngOnInit() {
  }


}
