import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlinmaGlobalModule } from 'alinma-global';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlinmaGlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
