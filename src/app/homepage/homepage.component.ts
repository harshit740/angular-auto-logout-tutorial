import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.focused();
  }
  focusState: String = "";
  massage: String = ""
  timeLeftinseconds:any = 10;
  x:any;
  title = 'angular-auto-logout-tutorial';
  @HostListener('document:focus', ['$event'])
  focused(): void {
    console.log('User is Active Focus Is gained');
    this.focusState = "Gained"
    this.massage = ""
    clearInterval(this.x)
    this.timeLeftinseconds=10;
  }
  @HostListener('document:blur', ['$event'])
  unFocused(): void {
    console.log('User Is Inactive Focus Is lost timer starts now');
    this.focusState = "Lost"
    this.massage = "Timer Starts timeLeftinseconds"
    // Time calculations for days, hours, minutes and seconds
    this.x = setInterval(()=> {
      this.timeLeftinseconds--
      if(this.timeLeftinseconds < 0){
        clearInterval(this.x)
        this.router.navigate(["login"]);
      }
    },1000);
  }


}
