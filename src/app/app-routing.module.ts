import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
 { path: '', loadChildren: './features/dashboard/index#DashboardModule' , pathMatch: 'full' },
 { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
 { path: '**', component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
