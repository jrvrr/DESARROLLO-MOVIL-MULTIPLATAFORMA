import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcerotuPage } from './procerotu.page';

const routes: Routes = [
  {
    path: '',
    component: ProcerotuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcerotuPageRoutingModule {}
