import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  string:string="0"
  secondes:number=50
  minutes:number=0;
  heures:number=0

  ngOnInit(){
    setInterval(()=>{
      this.secondes++
      if (this.secondes<10){
       this.secondes+this.string;

      }
      if(this.secondes==60){

        this.minutes++
        this.secondes=0
      }
    },1000)
  }

}
