import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CoffePageComponent } from './pages/coffe-page/coffe-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'list',
        component: ListPageComponent
      },
      {
        path: 'search',
        component: SearchPageComponent
      },
      {
        path: 'form',
        component: FormPageComponent
      },
      {
        path: 'by/:id',
        component: CoffePageComponent
      },
      {
        path: 'edit/:id',
        component: FormPageComponent
      },
      {
        path:'**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeRoutingModule { }
