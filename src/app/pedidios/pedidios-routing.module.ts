import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidiosPage } from './pedidios.page';

const routes: Routes = [
  {
    path: '',
    component: PedidiosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidiosPageRoutingModule {}
