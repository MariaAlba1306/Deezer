import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicService } from 'src/app/api/service/music.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  constructor(private http: HttpClient, public musicService: MusicService) {}
  ngOnInit(): void {}
  get loading(): any {
    return this.musicService.loading;
  }
}
