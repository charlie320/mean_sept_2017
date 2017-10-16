import { User } from './user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  index(callback) {
    this._http.get('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  getPosts(callback) {
    this._http.get('/getPosts').subscribe(
      res => callback(res.json()),
      err => console.log(err)      
    );
  }

  createUser(newUser: User, callback) {
    console.log("Inside the createUser method");
    this._http.post('/users', newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  show(id: string, callback) {
    this._http.get(`users/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  update(newUser: User, callback) {
    this._http.put(`users/${newUser._id}`, newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  destroy(id: string, callback) {
    this._http.delete(`users/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  authenticate(user: User, callback) {
    this._http.post('/login', user).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

}
