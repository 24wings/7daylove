import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RtnResult, User } from '../types/index.d';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(userService: UserService) {
    var a: RtnResult;

  }
}
