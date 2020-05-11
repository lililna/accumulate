import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
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
