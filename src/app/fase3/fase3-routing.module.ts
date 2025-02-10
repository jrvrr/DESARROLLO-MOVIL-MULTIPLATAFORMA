import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Fase3Page } from './fase3.page';

const routes: Routes = [
  {
    path: '',
    component: Fase3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Fase3PageRoutingModule {}
