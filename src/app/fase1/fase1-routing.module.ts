import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fase1Page } from './fase1.page';

const routes: Routes = [
  {
    path: '',
    component: Fase1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fase1PageRoutingModule {}
