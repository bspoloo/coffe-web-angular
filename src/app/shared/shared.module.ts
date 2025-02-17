import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';


@NgModule({
  declarations: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuBarComponent
  ]
})
export class SharedModule { }
