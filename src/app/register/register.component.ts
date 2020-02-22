import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private service: AppService) { }

  ngOnInit() {

    this.registerForm = this.fb.group({
      user_name: ['',Validators.required],
      user_email: ['',Validators.compose([Validators.required,Validators.email])],
      user_phone: ['',Validators.compose([Validators.required,Validators.maxLength(10)])],
      user_password: ['',Validators.required]
    })
  }

  registerUser(){
    if(this.registerForm.valid){
      this.service.register(this.registerForm.value).subscribe(data => console.log(data));
    }
  }

}
