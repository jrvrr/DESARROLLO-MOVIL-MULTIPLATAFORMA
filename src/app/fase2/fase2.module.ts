import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { Fase2PageRoutingModule } from './fase2-routing.module';

import { Fase2Page } from './fase2.page';
const routes: Routes = [
  {
    path: '',
    component: Fase2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fase2PageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Fase2Page]
})
export class Fase2PageModule {}
