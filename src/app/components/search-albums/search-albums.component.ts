import { Component, EventEmitter, Output } from '@angular/core';
import { Album } from '../../album';
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'app-search-albums',
  templateUrl: './search-albums.component.html',
  styleUrl: './search-albums.component.css'
})
export class SearchAlbumsComponent {
  letter?:string;
  albums:Album[]=[]

  constructor(public albumService: AlbumsService){}
  // @Output() letterEvent=new EventEmitter

  searchAlbum(letter:string){
   this.albums= this.albumService.searchAlbums(letter)
    console.log(this.albums);
    
  }
  // sendLetter(){
  //    this.letterEvent.emit(this.letter)
  // }

}
