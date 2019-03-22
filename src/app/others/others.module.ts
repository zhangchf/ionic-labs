import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OthersPage } from './others.page';
import { OthersRoutingModule } from './others-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthersRoutingModule
  ],
  declarations: [OthersPage]
})
export class OthersPageModule {}
