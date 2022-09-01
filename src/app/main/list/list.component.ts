import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ServicioService],
})
export class ListComponent implements OnInit {
  constructor(public servicioService: ServicioService) {}
  get favoriteArtists(): any {
    return this.servicioService.favoriteArtists;
  }
  ngOnInit(): void {
    console.log(this.favoriteArtists);
  }
}
