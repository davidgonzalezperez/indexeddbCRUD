import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AsyncLocalStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
