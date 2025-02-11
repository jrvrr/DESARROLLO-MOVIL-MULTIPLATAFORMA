import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidiosPageRoutingModule } from './pedidios-routing.module';

import { PedidiosPage } from './pedidios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidiosPageRoutingModule
  ],
  declarations: [PedidiosPage]
})
export class PedidiosPageModule {}
