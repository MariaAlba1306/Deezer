import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';
// import { Injectable } from '@angular/core';
// @Injectable()
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  favoriteSong: any;

  get resultsForSearch(): any {
    return this.musicService.searchbox;
  }
  get resultsForFilter(): any {
    return this.musicService.genreFilter;
  }

  //Getting results from Service About the search done in Search Component
  get searchResults(): any {
    return this.musicService.searchResults;
  }
  //Getting artist name from Service About the search done in Search Component
  // get name(): any {
  //   return this.musicService.searchResults[0].artist.name;
  // }
  // //Getting image from Service About the search done in Search Component

  // get image(): any {
  //   return this.musicService.searchResults[0].artist.picture_big;
  // }
  //Getting preview from Service About the search done in Search Component

  get preview(): any {
    return this.musicService.searchResults[0].preview;
  }

  get genreResults(): any {
    return this.musicService.genreResult;
  }
  constructor(public musicService: MusicService) {}

  // Function that sends info to Service when clicking in Fav artist
  addFavoriteArtist() {
    this.musicService.favoriteArtist(this.searchResults.artist.name);
  }

  addNewSong(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var song = idAttr.nodeValue;
    console.log(song);
    this.musicService.favoriteSongs(song);
  }

  addNewAlbum(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var album = idAttr.nodeValue;
    console.log(album);
    this.musicService.favoriteAlbums(album);
  }

  goToDetails(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var searchbox = idAttr.nodeValue;
    console.log(searchbox);
    this.musicService.searchBox(searchbox);
  }
  ngOnInit(): void {
    console.log(this.genreResults);
  }
}
