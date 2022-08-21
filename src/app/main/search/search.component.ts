import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  searchbox: string = '';
  hello: string = '';

  ngOnInit(): void {}
  holi(): void {
    console.log('hi');
  }

  takealook() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '48749493acmshd6c3712b227f2e9p1fce4djsnb264ada895f8',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      },
    };
    let search =
      'https://deezerdevs-deezer.p.rapidapi.com/search?q=' + this.searchbox;
    console.log(search);
    fetch(search, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        for (var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].album.id);
        }
      })
      .catch((err) => console.error(err));
  }
}
