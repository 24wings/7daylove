import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  girls: any[] = [];
  boys: any[] = [];
  allPlayers: any[] = [];
  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/player/allPlayer').map(response => response.json())
      .toPromise().then(rtn => {
        this.allPlayers = rtn.data;
        this.allPlayers.forEach(player => {
          player.score = this.countScore(player);
        });

        this.boys = this.allPlayers.filter(player => player.gender === '男');

        this.girls = this.allPlayers.filter(player => player.gender === '女');


      });

  }

  countScore(player) {
    let score = 0;
    player.anwsers.forEach(anwser => {
      console.log('计算方式:', '最大字符数:' + anwser.maxHeights, '与问答长度:', )
      score += anwser.maxHeights * (anwser.maxLetter / anwser.anwser.length);

    });
    return score;
  }

}
