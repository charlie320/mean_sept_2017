import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})

export class LoginRegComponent implements OnInit {

  // ninja: User = new User();
  // newUser: User = new User();
  // errors: string[] = [];

  newUser: User = new User();
  ninja: User = new User();
  registrationErrors: string[] = [];
  loginErrors: string[] = [];

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    // this.ninja.email = 'john@doe.com'
    // this.ninja.password = 'john1234'
    // this.loginUser();

  }

  createUser() {
    // console.log(this.newTask);
    this.registrationErrors = [];
    this._userService.createUser(
      this.newUser,
      data => {
        // decide if there are errors
        if (data.errors) {
          for (const key of Object.keys(data.errors)) {
            const error = data.errors[key];
            this.registrationErrors.push(error.message);
          }
        } else {
          this.newUser = new User();
          // do the next thing
          this._router.navigateByUrl('/');
        }
      }
    );
  }

  loginUser() {
    this.loginErrors = [];
    this._userService.authenticate(this.ninja, (res) => {
      console.log(res);
      if (res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.loginErrors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

}
