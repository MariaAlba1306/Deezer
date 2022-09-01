import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ServicioService } from './service/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicioService]
})
export class AppComponent {
  searchFinal(searchbox: any) {
    console.log('soy el padre');
    console.log(searchbox);
  }
  title = 'DeezerMaria';
  searchResults: any;
  constructor(
    public translate: TranslateService,
    private servicioService: ServicioService
  ) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    // if (lang != 'es' && lang != 'en') {
    translate.setDefaultLang('en');
    // }
  }
  ngOnInit(){
    this.searchResults = this.servicioService.searchResults
  }
}
