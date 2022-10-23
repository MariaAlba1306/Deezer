import { HttpClient } from '@angular/common/http';
import { makeBindingParser } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AnyForUntypedForms, FormControl } from '@angular/forms';
import { MusicService } from 'src/app/api/service/music.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
@Input()
export class SearchComponent {
  artists: string = '';
  inputField: FormControl = new FormControl();
  searchbox: string = '';
  yearFilter: any;
  genreFilter: string = '';
  value: any;
  album: any;
  searchResults: any;
  loading: any = '';
  querySearch: any;
  insert: boolean = false;

  constructor(
    public musicService: MusicService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  historyTmp: any;
  oldhistoryarray: any;
  recent: any = [];
  retrievedData: any;
  array: any;

  ngOnInit(): void {
    //To Check and show previous results in **lastResults** div
    if (localStorage.getItem('recent') != null) {
      historyTmp = localStorage.getItem('recent');
      this.retrievedData = localStorage.getItem('recent');
      this.array = JSON.parse(this.retrievedData);
      this.oldhistoryarray = historyTmp?.split('|');
      this.oldhistoryarray = historyTmp;
      this.oldhistoryarray = historyTmp
        ?.replace('["', '')
        .replace('"]', '')
        .replace(/['"]+/g, '');
      document.getElementById('lastResults')!.className = 'lastsearches';

      var liElem = '';
      for (var i = 0; i < this.array.length; i++) {
        liElem +=
          '<li ><a class="link" style="color:white;" href="/results/?search=' +
          this.array[i] +
          '"routerLink="results">' +
          this.array[i] +
          '</a></li>';
      }
      document.getElementById('lastResults')!.innerHTML = liElem;
    }
    //Storing New result in previous History localstorage
    if (localStorage.getItem('recent') != null) {
      var historyTmp = localStorage.getItem('recent');
    } else {
    }
  }

  searchFinal() {
    this.musicService.searchBox(this.searchbox);
    this.searchResults == null;
    this.musicService.addArray(this.searchbox);
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      if (this.searchbox.length > 0) {
        this.insert = false;
        this.musicService.searchBox(this.searchbox);
        this.searchResults == null;
        this.musicService.addArray(this.searchbox);
        this.router.navigate(['results'], {
          queryParams: { search: this.searchbox },
        });
      } else {
        this.insert = true;
      }
    } else {
      if (this.searchbox.length != null) {
        this.insert = false;
      }
    }
  }
  //   let form_data = new FormData(document.querySelector("#sample-form"));
  // let form_str = new URLSearchParams(form_data).toString();
  get favoriteArtists(): any {
    return this.musicService.favoriteArtists;
  }
  searchboxHistory: any;
}
