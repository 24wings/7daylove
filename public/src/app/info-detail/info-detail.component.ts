import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import '../rxjs-extentions';
@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit {
  allRadioQuestions: any[] = [];
  allAnwserQuestions: any[] = [];
  errorMsg: String = '';

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

  /**
   * 检查用户是否填写完整代码
   */
  checkAnwsers() {
    var finishAllRadio = true;
    var finishAllAnwserQuestion = true;
    this.allRadioQuestions.forEach(question => {
      if (!question.anwser) {
        finishAllRadio = false;
      }
    });
    this.allAnwserQuestions.forEach(anwserQuestion => {
      /**
       * 这里可以将 anwserQuestion.anwser.length提取为minLetter
       */
      if (!anwserQuestion.anwser) {
        finishAllAnwserQuestion = false;
      }
    });
    if ((!finishAllRadio) || (!finishAllAnwserQuestion)) {
      this.errorMsg = '信息不完整';
      setTimeout(() => {
        this.errorMsg = '';
      }, 3000);
    }
    /**
     * 发送请求,将答案包括问题的id都提交上去
     * 
     */
    else {
      this.http.post('/player/submitQuestions', {
        radios: this.allRadioQuestions,
        phone: localStorage.getItem('phone'),
        anwsers: this.allAnwserQuestions
      }).map(response => response.json())
        .toPromise().then((rtn) => {
          console.log(rtn);
        });
    }

  }

} 
