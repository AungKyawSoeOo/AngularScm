import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formReactiveValid';
  loginForm=new FormGroup({
    // user:new FormControl('john'), default value
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
  });
  loginUser(){
    console.log(this.loginForm)
  }
  get useR(){
    return this.loginForm.get('user');
  }
  get Password(){
    return this.loginForm.get('password');
  }
}
