import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  list = [
    {
      img: './../../../assets/images/home.jpg',
      title: '首页'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
