import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private service: AppService,
    private router: Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  loginUser(){
    if(this.loginForm.valid){
      this.service.login(this.loginForm.value).subscribe(data => {
        if(data.status == 1){
          this.router.navigate(['todo']);
        }
      });
    }
  }

}
