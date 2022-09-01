import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  artists: string = '';
  inputField: FormControl = new FormControl();
  searchbox: string = '';

  album: any;
  searchResults: any;
  constructor(private servicioService: ServicioService) {}

  searchFinal() {
    this.servicioService.searchBox(this.searchbox);
  }
  get favoriteArtists(): any {
    return this.servicioService.favoriteArtists;
  }
  hello() {
    console.log(this.favoriteArtists);
  }

  ngOnInit(): void {}
}
