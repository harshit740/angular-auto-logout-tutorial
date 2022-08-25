import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './componenets/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    HomepageComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
