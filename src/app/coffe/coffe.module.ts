import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeRoutingModule } from './coffe-routing.module';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { CoffePageComponent } from './pages/coffe-page/coffe-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from './components/card/card.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormPageComponent,
    CoffePageComponent,
    ListPageComponent,
    LayoutPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CoffeRoutingModule,
    SharedModule,
    CoffeRoutingModule,
    RouterModule
  ],
  exports: [
    CardComponent
  ]
})
export class CoffeModule { }
