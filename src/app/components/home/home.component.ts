import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input ()letter?:string;
  recupLetter(x:string){
    this.letter=x
    console.log(this.letter);
    

  }


}
