import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from '../home/home.component';
import { Login1Component } from '../login/login1/login1.component';


const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: "", redirectTo: "home1", pathMatch: "full" },
      { path: "home1", component: HomeComponent},
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
