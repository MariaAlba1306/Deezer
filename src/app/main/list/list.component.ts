import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/service/music.service';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
// import { Injectable } from '@angular/core';

// @Injectable()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  querySong = '';
  queryArtist = '';
  queryAlbum = '';

  constructor(
    public musicService: MusicService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.queryAlbum = data['album'];
      this.queryArtist = data['artist'];
      this.querySong = data['song'];
    });
  }
  get favoriteArtists(): any {
    return this.musicService.favoriteArtists;
  }

  get favoriteSong(): any {
    return this.musicService.favoriteSong;
  }
  get favoriteAlbum(): any {
    return this.musicService.favoriteAlbum;
  }

  favi() {
    console.log(this.favoriteArtists);
  }

  ngOnInit(): void {}
}
