import { Injectable } from '@angular/core';
import { Post } from './post';
import { Http } from '@angular/http';

@Injectable()
export class PostService {

    constructor(private _http: Http) { }

    index(callback) {
      this._http.get('/posts').subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    getPostsByUser(callback) {
      
    }

    create(newPost: Post, callback) {
      this._http.post('/posts', newPost).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    show(id: string, callback) {
      this._http.get(`posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    update(newPost: Post, callback) {
      this._http.put(`posts/${newPost._id}`, newPost).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }

    destroy(id: string, callback) {
      this._http.delete(`posts/${id}`).subscribe(
        res => callback(res.json()),
        err => console.log(err)
      );
    }
}
