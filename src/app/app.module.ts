import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { D3ForceComponent } from './d3-force/d3-force.component';
import { D3Force2Component } from './d3-force2/d3-force2.component';

@NgModule({
  declarations: [
    AppComponent,
    D3ForceComponent,
    D3Force2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
