import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { CoffeModule } from './coffe/coffe.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoffeModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
