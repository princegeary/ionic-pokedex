import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecieDetailPage } from './specie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SpecieDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecieDetailPageRoutingModule {}
