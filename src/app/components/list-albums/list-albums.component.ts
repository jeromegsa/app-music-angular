import { Component,EventEmitter,Input, Output } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';
import { Album, List } from '../../album';
import { ALBUM_LISTS, ALBUMS } from '../../mocks';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrl: './list-albums.component.css'
})


export class ListAlbumsComponent {
  albums:Album[]=ALBUMS
  id:number=0
  @Input ()letter:string="";
  lists:List[]=ALBUM_LISTS;
    x:List[]=[]

 @Output () xEvent=new EventEmitter
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

     afficherList(id:string){
     this.x= this.lists.filter((el)=>
        parseInt(id)==parseInt(el.id)

      )
      this.xEvent.emit(this.x)



  }





  // @Output() letterEvent=new EventEmitter



}
