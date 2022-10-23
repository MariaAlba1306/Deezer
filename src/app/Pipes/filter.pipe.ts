import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { MusicService } from '../api/service/music.service';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(favoriteSong: any, FilterText: string) {
    if (favoriteSong.length === 0 || FilterText === '') {
      return favoriteSong;
    } else {
      return favoriteSong.filter((song: any) => {
        return song.toUpperCase().includes(FilterText.toUpperCase());
      });
    }
  }
  transformAlbum(favoriteAlbum: any, FilterText: string) {
    if (favoriteAlbum.length === 0 || FilterText === '') {
      return favoriteAlbum;
    } else {
      return favoriteAlbum.filter((item: any) => {
        return item.toUpperCase().includes(FilterText.toUpperCase());
      });
    }
  }
  transformArtist(favoriteArtists: any, FilterText: string) {
    if (favoriteArtists.length === 0 || FilterText === '') {
      return favoriteArtists;
    } else {
      return favoriteArtists.filter((artist: any) => {
        return artist.toUpperCase().includes(FilterText.toUpperCase());
      });
    }
  }
}
