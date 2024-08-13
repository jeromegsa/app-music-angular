import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, List } from '../../album';
import { ALBUM_LISTS, ALBUMS } from '../../mocks';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  id:number=0
  albums:Album[]=ALBUMS;
  lists:List[]=ALBUM_LISTS;
  y:Album[]=[]


@Input ()tabList:List[]=[]

ngOnInit()
{
  this.albums.filter(el=>el.id==this.tabList[0].id)
  console.log(this.tabList);

  console.log(this.albums);

}

  }





