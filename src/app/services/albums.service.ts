import { Injectable } from '@angular/core';
import { ALBUM_LISTS, ALBUMS } from '../mocks';
import { Album } from '../album';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {
  albums: Album[]=ALBUMS

  constructor() { }

  getAlbums(){
    return ALBUMS;
  }

  searchAlbums(letter:string){
    console.log(letter);

   return  this.albums.filter(el=>el.title.includes(letter))

  }
}
