import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DeezerMaria';
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    if (lang != 'es' && lang != 'en') {
      translate.setDefaultLang('en');
    }
  }
}
