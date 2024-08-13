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
@Output () letterEvent=new EventEmitter
  constructor(public albumService: AlbumsService){}
  // @Output() letterEvent=new EventEmitter



  sendLetter (){
    this.letterEvent.emit(this.letter)
  }
  // sendLetter(){
  //    this.letterEvent.emit(this.letter)
  // }

}
