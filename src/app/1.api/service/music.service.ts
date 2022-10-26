import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { concat, filter } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class MusicService implements OnInit {
  ngOnInit(): void {
    this.searchResults = null;
    this.searchbox = '';
    this.noSearch = null;
  }
  // Credentianls from RAPIDAPI
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48749493acmshd6c3712b227f2e9p1fce4djsnb264ada895f8',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };

  // Results from SearchResults API
  searchResults: any = '';
  // Results from Artist API API
  artistInfo: any;
  // Fields  from searchbox in Search Page
  searchbox: any;
  favoriteArtists: any = [];
  favoriteSong: any = [];
  favoriteAlbum: any = [];
  yearFilter: number = 0;
  genreFilter: string = '';
  genreResult: any = '';
  HeaderDetails: any = '';
  ArtistDetails: any = '';
  SongDetails: any = '';
  querySearch: any = '';

  constructor(private http: HttpClient) {}

  BehaviorSubject: any;
  loading: any;
  _loadingSubject: boolean = false;
  noSearch: any;
  searchCharacteres: any = 'hola';
  searchNumber = 0;
  // We expose observables because we want our components to have a read access
  // but no write access to the information

  _errorSubject: string = '';
  //Searchbox function - receiving info from search to results
  // https://cors-anywhere.herokuapp.com/corsdemo

  searchBox(searchbox: string) {
    //Search API
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let search = 'https://api.deezer.com/search?q=' + searchbox;
    this.loading = 'loading';
    fetch(corsAnywhere + search, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.loading = null;
        this.searchbox = searchbox;
        this.searchResults = response.data;

        if (this.searchResults.length > 0) {
          this.searchCharacteres = 'results';
          this.loading = null;
          this.noSearch = null;
        } else if (
          this.searchResults.length == null ||
          this.searchResults.length == 0
        ) {
          this.noSearch = 'yes';
        } else {
          this.loading = null;
        }
      })
      .catch((err) => {
        console.error(err);
        this.loading = null;
        this.noSearch = 'yes';
      });
  }
  recent: any = [];
  addArray(searchbox: any) {
    this.recent.push(searchbox);
    window.localStorage.setItem('recent', JSON.stringify(this.recent));
  }
  //Details function - receiving info from search or results to detail
  detailSearch(detailSearch: string) {
    this.loading = 'loading';
    console.log('hi');
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let search = 'https://api.deezer.com/search?q=' + detailSearch;
    fetch(corsAnywhere + search, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.loading = null;
        this.HeaderDetails = response.data;
      })
      .catch((err) => console.error(err));
  }

  // Save Favorite artist - receiving info from results page
  favoriteArtist(name: any) {
    this.favoriteArtists?.push(name);
  }

  // Save Favorite Song - receiving info from results page
  favoriteSongs(song: any) {
    this.favoriteSong?.push(song);
  }

  // Save Favorite Album - receiving info from results page
  favoriteAlbums(album: any) {
    this.favoriteAlbum?.push(album);
    this.favoriteAlbum?.push();
  }
}
