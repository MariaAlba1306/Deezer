import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from 'src/app/1.api/service/music.service';
import { ActivatedRoute } from '@angular/router';
// import { Injectable } from '@angular/core';
// @Injectable()
@Component({
  selector: 'app-results',
  templateUrl: './pages/results.component.html',
  styleUrls: ['./results.component.css'],
})
@Input()
export class ResultsComponent implements OnInit {
  constructor(
    public musicService: MusicService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySong = data['song'];
    });
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  favoriteSong: any;
  querySong: any;
  querySearch: any;

  ngOnInit(): void {
    this.musicService.searchBox(this.querySearch);
    this.musicService.searchCharacteres;
  }

  //Getting value from Service when there's no results in the search
  get noSearch(): any {
    return this.musicService.noSearch;
  }
  //Getting search word from Service

  get resultsForSearch(): any {
    return this.musicService.searchbox;
  }

  //Getting results from Service About the search done in Search Component
  get searchResults(): any {
    return this.musicService.searchResults;
  }

  // Getting artist name from Service About the search done in Search Component
  get name(): any {
    if (
      this.resultsForSearch.toUpperCase() ===
      this.musicService.searchResults[0].artist.name.toUpperCase()
    )
      return this.musicService.searchResults[0].artist.name;
  }

  // Function that sends info to Service when clicking in Fav artist
  favorite: any;
  addFavoriteArtist() {
    this.musicService.favoriteArtist(this.searchResults[0].artist.name);
    this.favorite = document.getElementById('favoriteArtist');
    this.favorite.className = 'none';
  }
  added: any;
  // Function that sends info to Service when clicking in Fav Song

  addNewSong(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var song = idAttr.nodeValue;
    var NameAttr = target.attributes.name;
    var name = NameAttr.nodeValue;
    this.musicService.favoriteSongs(song);
    for (var i = 0; i < document.getElementsByName(name).length; i++) {
      document.getElementsByName(name)[i].className = 'none';
    }
  }
  addedAlbum: any;
  // Function that sends info to Service when clicking in Fav album

  addNewAlbum(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var NameAttr = target.attributes.name;
    var name = NameAttr.nodeValue;
    var album = idAttr.nodeValue;
    this.musicService.favoriteAlbums(album);
    for (var i = 0; i < document.getElementsByName(name).length; i++) {
      document.getElementsByName(name)[i].className = 'none';
    }
  }
  // Function that goes to details of specific song/album
  goToDetails(event: any) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    var searchbox = idAttr.nodeValue;
    this.musicService.searchBox(searchbox);
  }
}
