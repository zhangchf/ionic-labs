import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPage } from './components.page';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ComponentsPage
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ComponentsRoutingModule { }
