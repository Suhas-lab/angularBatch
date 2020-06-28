import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  template: 'Favorite Color: <input type="text" [formControl]="favoriteColorControl">'
})
export class LoginComponent implements OnInit {

  favoriteColorControl = new FormControl('');
  //newformgroup = new FormGroup()

  userlogin = {
    username:"SuhasK",
    password:"Admin"
  }
  onwaydatabind : string;
  passwordonst : number;
  classattr: boolean;
  constructor() { }

  ngOnInit(): void {
    this.onwaydatabind = "This is angular batch";
    this.classattr = true;
  }
  login() : void{
    console.log("User login details =>",this.userlogin);
  }
}
