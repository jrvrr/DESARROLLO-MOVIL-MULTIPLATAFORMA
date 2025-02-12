import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcerotuPageRoutingModule } from './procerotu-routing.module';

import { ProcerotuPage } from './procerotu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcerotuPageRoutingModule
  ],
  declarations: [ProcerotuPage]
})
export class ProcerotuPageModule {}
