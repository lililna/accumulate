import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(private http: HttpClient) { }
    /* 
     *获取菜单列表
     */
    getMenuList(): Observable<any> {
        return this.http.get(`./assets/data/menu.json`);
    }
}