import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { enableDebugTools } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'grid-layout', loadChildren: './grid-layout/grid-layout.module#GridLayoutPageModule' },
  { path: 'actionsheet', loadChildren: './actionsheet/actionsheet.module#ActionsheetPageModule' },
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(
    routes,
    {
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
