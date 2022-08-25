import { Dialog } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from '../componenets/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  constructor(private router: Router, private dialog: Dialog) { }
  dialogRef: any;
  idDialogOpen = false;
  timeInSeconds = 10;
  timeLeft = this.timeInSeconds;
  timerInterval = new BehaviorSubject(this.timeLeft);
  focusState = new BehaviorSubject(false);
  timer: any

  setFocus(focus: Boolean): void {
    if (focus) {
      console.log('User is Active Focus Is gained');
      this.focusState.next(true)
      clearInterval(this.timer)
      this.timeLeft = this.timeInSeconds;
      if (this.idDialogOpen) {
        this.closeDialog();
      }
    } else {
      console.log('User Is Inactive Focus Is lost timer starts now');
      this.focusState.next(false)
      this.timer = setInterval(() => {
        this.timeLeft--
        this.timerInterval.next(this.timeLeft)
        if (this.timeLeft <= 5 && !this.idDialogOpen) {
          this.openDialog();
        }
        else if (this.timeLeft < 0) {
          clearInterval(this.timer)
          this.timeLeft = this.timeInSeconds;
          this.router.navigate(["login"]);//redirect user to login Componenet once timer Expires
          this.closeDialog();
        }
      }, 1000);
    }
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
    });
    this.idDialogOpen = true;
  }
  closeDialog(): void {
    this.dialogRef.close();
    this.idDialogOpen = false;
  }
}