import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  login(formvalue){
    return this.http.post('http://localhost:1234/user/login',formvalue);
  }

  register(formvalue){
    return this.http.post('http://localhost:1234/user/signup',formvalue);
  }
}
