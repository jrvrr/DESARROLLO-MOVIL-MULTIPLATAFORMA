import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Fase3PageRoutingModule } from './fase3-routing.module';

import { Fase3Page } from './fase3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Fase3PageRoutingModule
  ],
  declarations: [Fase3Page]
})
export class Fase3PageModule {}
