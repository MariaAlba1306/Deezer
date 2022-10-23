import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MusicService } from './api/service/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
