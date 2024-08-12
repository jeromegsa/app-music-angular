import { Component } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})


export class ListAlbumsComponent {
  albums:Album[]=[]
  constructor( public albumService:AlbumsService){}
  ngOnInit(){
      this.albums=this.albumService.getAlbums()
      console.log(this.albums);
      
  }

  letter:string="";
  

 
  // @Output() letterEvent=new EventEmitter

  searchAlbum(letter:string){
    this.albums=this.albumService.searchAlbums(letter)

  }

}
