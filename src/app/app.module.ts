import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],

})

export class AppModule implements DoBootstrap {
    ngDoBootstrap(appRef: ApplicationRef) {
        
       const _root = document.createElement('app-root');
       document.body.appendChild(_root);

       const element = document.querySelector("app-root");
       appRef.bootstrap(AppComponent, element);
    }
 }
