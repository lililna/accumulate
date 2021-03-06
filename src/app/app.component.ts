import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isCollapsed = false;
  menuList = [];
  constructor(private service: AppService,
    private router: Router){}

  ngOnInit() {
    this.service.getMenuList().subscribe(v => {
      console.log(v);
      this.menuList = v;
    })
  }

  toRouter(item) {
    console.log(item);
    if (item.openNew==false) {
      this.router.navigateByUrl(item.url)
    }
  }

}
