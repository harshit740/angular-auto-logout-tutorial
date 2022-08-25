import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { TimeService } from '../services/TimeService.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  focusState:any;
  massage: String = ""
  timeLeftinseconds: any;
  title = 'angular-auto-logout-tutorial';

  constructor(private timerService: TimeService) { }

  ngOnInit(): void {
    this.focused();
    this.focusState = this.timerService.focusState;
    this.timeLeftinseconds = this.timerService.timerInterval;
  }

  @HostListener('document:focus', ['$event'])
  focused(): void {
    this.timerService.setFocus(true)
  }
  @HostListener('document:blur', ['$event'])
  unFocused(): void {
    this.timerService.setFocus(false)
  }
}
