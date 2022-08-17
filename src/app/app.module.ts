import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './main/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './main/list/list.component';
import { ResultsComponent } from './results/results.component';
import { DetailComponent } from './detail/detail.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    ResultsComponent,
    DetailComponent,
    CabeceroComponent,
    NotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
