import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fase4PageRoutingModule } from './fase4-routing.module';

import { Fase4Page } from './fase4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fase4PageRoutingModule
  ],
  declarations: [Fase4Page]
})
export class Fase4PageModule {}
