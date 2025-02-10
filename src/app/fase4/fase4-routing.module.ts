import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fase4Page } from './fase4.page';

const routes: Routes = [
  {
    path: '',
    component: Fase4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fase4PageRoutingModule {}
