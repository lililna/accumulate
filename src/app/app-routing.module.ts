import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: 'main', loadChildren: "./pages/main/main.module#MainModule" },
  { path: 'home', loadChildren: "./pages/home/home.module#HomeModule" },
  { path: 'login', loadChildren: "./pages/login/login.module#LoginModule" }
  /* { path: 'welcome', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
