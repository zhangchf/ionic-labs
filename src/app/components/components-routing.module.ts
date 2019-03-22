import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPage } from './components.page';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ComponentsPage,
    // children: [
    //   {
    //     path: 'grid-layout',
    //     loadChildren: '../grid-layout/grid-layout.module#GridLayoutPageModule'
    //   },
    //   {
    //     path: 'actionsheet',
    //     loadChildren: '../actionsheet/actionsheet.module#ActionsheetPageModule'
    //   }
    // ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
