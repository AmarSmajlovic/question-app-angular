import { Injectable } from '@angular/core';
import { User } from '../models/User.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  get loggedUser(){
    return  JSON.parse(localStorage.getItem('user')!);
}
}
