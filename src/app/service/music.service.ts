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
  genero = [
    {
      id: 2,
      name: 'African Music',
      picture: 'https://api.deezer.com/genre/2/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/misc/703413adf47ad8a6001b438f7608a2be/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/misc/703413adf47ad8a6001b438f7608a2be/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/misc/703413adf47ad8a6001b438f7608a2be/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/misc/703413adf47ad8a6001b438f7608a2be/1000x1000-000000-80-0-0.jpg',
      type: 'genre',
    },
  ];

  ngOnInit(): void {}

  //Searchbox function - receiving info from search to results
  searchBox(searchbox: string) {
    //Search API
    let search =
      'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + searchbox;
    fetch(search, this.options)
      .then((response) => response.json())
      .then((response) => {
        this.searchResults = response.data;
        console.log(searchbox);
        this.searchbox = searchbox;
        this.genreResult = '';
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
    console.log('hello', this.favoriteArtists);
  }

  favoriteSongs(song: any) {
    this.favoriteSong?.push(song);
    console.log('hello', this.favoriteSong);
  }
  favoriteAlbums(album: any) {
    this.favoriteAlbum?.push(album);
    console.log('hello', this.favoriteAlbum);
  }
}
