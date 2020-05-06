import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  menuList = [];
  constructor(private service: AppService){}

  ngOnInit() {
    this.service.getMenuList().subscribe(v => {
      console.log(v);
      this.menuList = v;
    })
  }

}
