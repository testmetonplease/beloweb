import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
 { path: '', loadChildren: './features/dashboard/index#DashboardModule' , pathMatch: 'full' },
 { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
 { path: '**', loadChildren: './features/not-found404/index#NotFound404Module' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    // preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
