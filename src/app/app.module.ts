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
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
//AOUT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
