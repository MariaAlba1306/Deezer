import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from 'src/app/service/music.service';

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
    private route: ActivatedRoute
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
      return 'Canción: ' + this.musicService.HeaderDetails[0].title;
    } else if (this.album) {
      return 'Album: ' + this.musicService.HeaderDetails[0].album.title;
    } else {
      return 'Artista: ' + this.musicService.HeaderDetails[0].artist.name;
    }
  }
  get Subheader(): any {
    if (this.song) {
      return 'Album: ' + this.musicService.HeaderDetails[0].album.title;
    } else if (this.album) {
      return 'Artista: ' + this.musicService.HeaderDetails[0].artist.name;
    } else {
    }
  }
  get Subsubheader(): any {
    if (this.song) {
      return 'Artista: ' + this.musicService.HeaderDetails[0].artist.name;
    } else {
    }
  }

  searchDetail() {
    this.musicService.detailSearch(this.detailSearch);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.album = params['album'];
      this.song = params['song'];
      this.artist = params['artist'];
      if (this.song) {
        this.detailSearch = this.song;
        console.log(this.detailSearch);
      } else if (this.album) {
        this.detailSearch = this.album;
        console.log(this.detailSearch);
      } else if (this.artist) {
        this.detailSearch = this.artist;
        console.log(this.detailSearch);
      }
    });
    this.searchDetail();
  }
}

// detailSong() {
//   this.musicService.goToDetails({
//     artist: this.HeaderDetails,
//     song: this.HeaderDetails,
//     album: this.HeaderDetails,
//     HeaderDetails: this.HeaderDetails,
//   });
//   if (this.artist) {
//     this.Header = 'Artista: ' + this.HeaderDetails;
//   } else if (this.song) {
//     this.Header = 'Canción: ' + this.song;
//     this.subheader = 'Artista: ' + this.HeaderDetails;
//     console.log(this.HeaderDetails);
//   } else if (this.album) {
//     this.Header = 'Album: ' + this.album;
//   }
// }
