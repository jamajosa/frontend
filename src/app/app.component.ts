import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public userService : UserService,public router:Router){}
  title = 'GameDb';
  boolean:boolean;

  ngDoCheck(){
    if (!this.userService.isLoggedIn()) {
      this.boolean = false;
    }
    else{
      this.boolean = true;
    }
  }

  deleteToken(){
    this.userService.deleteToken();
    this.router.navigate(['']);
  }

}
