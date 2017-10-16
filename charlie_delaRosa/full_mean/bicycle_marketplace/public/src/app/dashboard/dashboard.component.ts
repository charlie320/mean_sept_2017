import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { User } from '../user';
import { Post } from '../post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  currentUser: User = new User();
  posts = [];

  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false) {
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
      }
    });
    this.getPosts();
    this.getPostsByUser();
  }

  getPosts(){
    console.log("Inside the get posts function");
    this._postService.index(posts => this.posts = posts);
  }

  getPostsByUser(){
    this._userService.getPosts((res) => {
      this.currentUser = res;
    })
  }

  logout(){
    this._userService.logout((res) => {
      this._router.navigateByUrl('/');
    })
  }
}
