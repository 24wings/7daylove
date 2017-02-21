import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  user = {
    phone: '',
    password: '',
    info: ''
  };

  constructor(public http: Http) {

    this.http.get('http://localhost:3000/player/allPlayer', {})
      .map(rtn => rtn.json())
      .toPromise().then(rtn => console.log(rtn))

  }

  setUser(user) {

  }
}
