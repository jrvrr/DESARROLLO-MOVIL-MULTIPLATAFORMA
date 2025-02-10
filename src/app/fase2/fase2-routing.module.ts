import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fase2Page } from './fase2.page';
const routes: Routes = [
  {
    path: '',
    component: Fase2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fase2PageRoutingModule {}
