import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';
// import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(public musicService: MusicService) {}
  get favoriteArtists(): any {
    return this.musicService.favoriteArtists;
  }

  get favoriteSong(): any {
    return this.musicService.favoriteSong;
  }
  get favoriteAlbum(): any {
    return this.musicService.favoriteAlbum;
  }

  ngOnInit(): void {
    console.log(this.favoriteArtists);
  }

  favi() {
    console.log(this.favoriteArtists);
  }
}
