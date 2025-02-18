import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coffes',
    loadChildren: () => import('./coffe/coffe.module').then(m => m.CoffeModule)
  },
  {
    path: '**',
    redirectTo: 'coffes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
