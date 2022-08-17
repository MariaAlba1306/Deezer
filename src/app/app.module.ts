import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './main/list/list.component';
import { ResultsComponent } from './results/results.component';
import { DetailComponent } from './detail/detail.component';
import { CabeceroComponent } from './cabecero/cabecero.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ResultsComponent,
    DetailComponent,
    CabeceroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
