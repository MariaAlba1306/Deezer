import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css'],
})
export class CabeceroComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
  switchLang = (lang: string) => {
    this.translate.use(lang);
  };
}
