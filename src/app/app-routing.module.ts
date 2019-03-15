import { HomePage } from './home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  { path: 'grid-layout', loadChildren: './grid-layout/grid-layout.module#GridLayoutPageModule' },
  { path: 'actionsheet', loadChildren: './actionsheet/actionsheet.module#ActionsheetPageModule' },
  // { path: 'home/others', loadChildren: './others/others.module#OthersPageModule' },
  // { path: 'home/components', loadChildren: './components/components.module#ComponentsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
