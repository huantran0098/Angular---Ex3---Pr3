import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  like = 0;

  constructor() {
  }

  ngOnInit() {
  }

  likeThis() {
    this.like++;
  }
  dislikeThis(){
    if(this.like == 0){
      this.like = 0;
    } else {
      this.like--;
    }
  }
}
