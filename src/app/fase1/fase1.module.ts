import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fase1PageRoutingModule } from './fase1-routing.module';

import { Fase1Page } from './fase1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fase1PageRoutingModule
  ],
  declarations: [Fase1Page]
})
export class Fase1PageModule {}
