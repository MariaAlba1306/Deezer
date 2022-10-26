import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchComponent } from './5.public/5.2features/main/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './5.public/5.2features/main/list.component';
import { ResultsComponent } from './5.public/5.2features/results/results.component';
import { DetailComponent } from './5.public/5.2features/detail/detail.component';
import { CabeceroComponent } from './2.core/header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { LoadingComponent } from './5.public/5.4shared/loading/loading.component';
// import { MusicService } from './service/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultsComponent,
    DetailComponent,
    CabeceroComponent,
    ListComponent,
    NotfoundComponent,
    FilterPipe,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
