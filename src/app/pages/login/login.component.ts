import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

 constructor(private router:Router){}

 user:User = {};
 name = new FormControl('');
 password = new FormControl('');

 handleLogin(){
  this.user= {
    name:this.name.value,
    password:this.password.value
  }
  localStorage.setItem('user',JSON.stringify(this.user));
  this.router.navigateByUrl('/home')

 }

}
