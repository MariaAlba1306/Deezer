import { Component, Input, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  //Getting results from Service About the search done in Search Component
  get searchResults(): any {
    return this.servicioService.searchResults;
  }
  //Getting artist name from Service About the search done in Search Component
  get name(): any {
    return this.servicioService.searchResults[0].artist.name;
  }
  //Getting image from Service About the search done in Search Component

  get image(): any {
    return this.servicioService.searchResults[0].artist.picture_big;
  }
  //Getting preview from Service About the search done in Search Component

  get preview(): any {
    return this.servicioService.searchResults[0].preview;
  }
  constructor(private servicioService: ServicioService) {}

  // Function that sends info to Service when clicking in Fav artist
  favoriteArtist() {
    this.servicioService.favoriteArtist(this.name);
  }

  ngOnInit(): void {}
}
