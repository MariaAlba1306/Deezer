import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/api/service/music.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  album: any = '';
  song: any = '';
  artist: any = '';
  detailSearch: any = '';
  constructor(
    public musicService: MusicService,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) {}

  get Image(): any {
    if (this.song) {
      return this.musicService.HeaderDetails[0].album.cover;
    } else if (this.album) {
      return this.musicService.HeaderDetails[0].album.cover;
    } else {
      return this.musicService.HeaderDetails[0].artist.picture;
    }
  }
  get Header(): any {
    if (this.song) {
      return this.musicService.HeaderDetails[0].title;
    } else if (this.album) {
      return this.musicService.HeaderDetails[0].album.title;
    } else {
      return this.musicService.HeaderDetails[0].artist.name;
    }
  }
  get Subheader(): any {
    if (this.song) {
      return this.musicService.HeaderDetails[0].album.title;
    } else if (this.album) {
      return this.musicService.HeaderDetails[0].artist.name;
    } else {
    }
  }
  get Subsubheader(): any {
    if (this.song) {
      return this.musicService.HeaderDetails[0].artist.name;
    } else {
    }
  }

  searchDetail() {
    this.musicService.detailSearch(this.detailSearch);
  }

  ngOnInit(): void {
    this.song = '';
    this.album = '';
    this.route.queryParams.subscribe((params) => {
      this.album = params['album'];
      this.song = params['song'];
      this.artist = params['artist'];
      if (this.song) {
        this.detailSearch = this.song;
      } else if (this.album) {
        this.detailSearch = this.album;
      } else if (this.artist) {
        this.detailSearch = this.artist;
      }
    });
    this.searchDetail();
  }
}
