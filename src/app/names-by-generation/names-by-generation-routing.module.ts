import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NamesByGenerationPage } from './names-by-generation.page';

const routes: Routes = [
  {
    path: '',
    component: NamesByGenerationPage,
  },
  {
    path: 'specie-detail',
    loadChildren: () => import('./specie-detail/specie-detail.module').then(m => m.SpecieDetailPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NamesByGenerationPageRoutingModule { }
