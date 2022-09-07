import { HttpClient } from '@angular/common/http';
import { makeBindingParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MusicService } from 'src/app/service/music.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: string = '';
  inputField: FormControl = new FormControl();
  searchbox: string = '';
  yearFilter: any;
  genreFilter: string = '';
  value: any;

  album: any;
  searchResults: any;
  constructor(public musicService: MusicService) {}

  searchFinal() {
    this.musicService.searchBox(this.searchbox);
  }
  get favoriteArtists(): any {
    return this.musicService.favoriteArtists;
  }
  applyFilters() {
    this.musicService.filter(this.yearFilter, this.selectedGenre);
  }

  selectedGenre = '';
  selectedGenreValue = '';
  onSelectedGenre(value: string): void {
    this.selectedGenre = value;
    console.log(this.selectedGenre);
  }
  onSelectedGenreId(id: string): void {
    this.selectedGenreValue = id;
    console.log('value', this.selectedGenreValue);
  }
  selectedYear = null;
  onSelectedYear(selectedYear: any) {
    return this.selectedYear;
    console.log('hi');
  }

  ngOnInit(): void {}
}
