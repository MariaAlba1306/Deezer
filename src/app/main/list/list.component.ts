import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/api/service/music.service';
import { RouterOutlet, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  querySong = '';
  queryArtist = '';
  queryAlbum = '';
  searchbox = '';

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

  modal: any;
  cancel: any;
  filter: any;
  FilterText: string = '';

  openFilter() {
    this.modal = document.getElementById('MyModal2');
    this.modal.style.display = 'flex';
    this.cancel = document.getElementById('cancel');
    this.cancel.style.display = 'block';
    this.filter = document.getElementById('filter');
    this.filter.style.display = 'none';
  }
  cancelFilter() {
    this.modal = document.getElementById('MyModal2');
    this.modal.style.display = 'none';
    this.cancel = document.getElementById('cancel');
    this.cancel.style.display = 'none';
    this.filter = document.getElementById('filter');
    this.filter.style.display = 'block';
    this.FilterText = '';
  }
  ngOnInit(): void {}
}
