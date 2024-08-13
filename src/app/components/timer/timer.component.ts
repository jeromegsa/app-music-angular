import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {

  secondes:number=50
  minutes:number=0;
  heures:number=0

  ngOnInit(){
    setInterval(()=>{
      this.secondes++
      if (this.secondes<10){
        this.secondes+ " 0 "
      }
      if(this.secondes==60){

        this.minutes++
        this.secondes=0
      }
    },1000)
  }

}
