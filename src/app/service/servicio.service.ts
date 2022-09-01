import { Injectable } from '@angular/core';

@Injectable()
export class ServicioService {
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
  favoriteArtists = [
    {
      name: 'Mario',
    },
    {
      name: 'Lucas',
    },
    { song: 'Yo quiero bailar' },
    { song: 'Without me' },
    { album: 'La vida loca' },
    { album: 'Album inédito' },
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
      })
      .catch((err) => console.error(err));
    //Artist API
    let artistSearch =
      'https://deezerdevs-deezer.p.rapidapi.com/artist/' + '13';
    fetch(artistSearch, this.options)
      .then((response) => response.json())
      .then((response) => {
        this.artistInfo = response.data;
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
}
