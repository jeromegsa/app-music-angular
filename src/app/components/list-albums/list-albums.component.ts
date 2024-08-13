import { Component,Input } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album } from '../../album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})


export class ListAlbumsComponent {
  albums:Album[]=[]
  @Input ()letter:string="";
  constructor( public albumService:AlbumsService){}
  ngOnInit(){
      this.albums=this.albumService.getAlbums()
      console.log(this.albums);


     }
     searchAlbums(){
      this.albums=this.albumService.searchAlbums(this.letter)
     console.log(this.letter);
     console.log(this.albums);



  }





  // @Output() letterEvent=new EventEmitter



}
