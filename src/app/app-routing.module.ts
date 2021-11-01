import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule) },
  {
    path: 'pokemons',
    children: [
      {
        path: '',
        canLoad: [AuthGuard],
        loadChildren: () => import('./names-by-generation/names-by-generation.module').then(m => m.NamesByGenerationPageModule),
      },
      {
        path: ':specieName',
        loadChildren: () => import('./names-by-generation/specie-detail/specie-detail.module').then(m => m.SpecieDetailPageModule)
      }
    ],
  },
];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
