import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentsPage } from './components.page';
import { ComponentsRoutingModule } from './components-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsRoutingModule
  ],
  declarations: [ComponentsPage]
})
export class ComponentsPageModule {}
