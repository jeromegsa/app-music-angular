import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  letter:string ="";
  recupLetter(x:string){
    this.letter=x
    console.log(this.letter);


  }
  shouldDisplayComponents(): boolean {
    // Retourner false pour les routes spécifiques où vous ne voulez pas afficher les autres composants
    // Par exemple, si vous voulez cacher les composants pour la route '/single-component'
    return this.router.url !== '/album/:id';
  }


}
