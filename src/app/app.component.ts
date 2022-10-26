import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MusicService } from './1.api/service/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./3.layout/app.component.css'],
})
export class AppComponent {
  title = 'DeezerMaria';
  searchResults: any;
  constructor(
    public translate: TranslateService,
    public musicService: MusicService
  ) {
    translate.addLangs(['en', 'es']);
    const lang = translate.getBrowserLang();
    // if (lang != 'es' && lang != 'en') {
    translate.setDefaultLang('en');
    // }
  }

  ngOnInit() {
    this.searchResults = this.musicService.searchResults;
  }
}
