import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
