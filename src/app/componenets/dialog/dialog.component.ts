import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/TimeService.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  seconds:any
  constructor(private timerService:TimeService) {}


  ngOnInit(): void {
    this.seconds = this.timerService.timerInterval;
  }
  countinue():void{
    this.timerService.setFocus(true);
  }

}