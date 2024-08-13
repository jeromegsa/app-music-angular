import { Component } from '@angular/core';
import { Album } from '../../album';
import { AlbumsService } from '../../services/albums.service';
import { ALBUMS } from '../../mocks';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-components',
  templateUrl: './details-components.component.html',
  styleUrl: './details-components.component.css'
})
export class DetailsComponentsComponent {

  id: number = 0
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id);
    });
  }

  navigateToAlbum(albumId: number) {
    this.router.navigate(['/album', albumId]);
  }


  album: Album[] = ALBUMS
  albumFilter: Album[]=[]
  ngOnInit() {


    return this.albumFilter=this.album.filter(el => {
      return parseInt(el.id, 10) == this.id
        ;

    })
  }



}
