import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Album, List } from '../../album';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  tab:List[] =[];
  recupX(x:List[]){
    this.tab=x
    console.log(this.tab);


  }
  shouldDisplayComponents(): boolean {
    // Retourner false pour les routes spécifiques où vous ne voulez pas afficher les autres composants
    // Par exemple, si vous voulez cacher les composants pour la route '/single-component'
    return this.router.url !== '/album/:id';
  }


}
