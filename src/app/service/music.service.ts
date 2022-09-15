import { Injectable } from '@angular/core';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class MusicService {
  constructor() {}
  // Credentianls from RAPIDAPI
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '48749493acmshd6c3712b227f2e9p1fce4djsnb264ada895f8',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  };
  // Results from SearchResults API
  searchResults: any;
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

  //Searchbox function - receiving info from search to results
  searchBox(searchbox: string) {
    //Search API

    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let search = 'https://api.deezer.com/search?q=' + searchbox;
    fetch(corsAnywhere + search, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.searchResults = response.data;
        this.genreResult = '';
        console.log(this.searchResults);
      })
      .catch((err) => console.error(err));
  }
  //Details function - receiving info from search to results
  detailSearch(detailSearch: string) {
    // //Search API
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
        this.HeaderDetails = response.data;
        console.log(this.HeaderDetails);
      })
      .catch((err) => console.error(err));
  }
  filter(yearFilter: number, genreFilter: string) {
    // to activate temporary CORs https://cors-anywhere.herokuapp.com/corsdemo

    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    let genreSearch = 'http://api.deezer.com/genre/' + genreFilter + '/artists';
    fetch(corsAnywhere + genreSearch, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        this.genreResult = response.data;
        this.searchResults = '';
        this.searchbox = '';
        console.log(this.genreResult);
      })
      .catch((err) => console.error(err));
  }
  // Save Favorite artist - receiving info from results page

  favoriteArtist(name: any) {
    console.log(name);
    // this.favoriteArtists = 'eminem';
    this.favoriteArtists?.push(name);
  }

  favoriteSongs(song: any) {
    this.favoriteSong?.push(song);
  }
  favoriteAlbums(album: any) {
    this.favoriteAlbum?.push(album);
  }
}
