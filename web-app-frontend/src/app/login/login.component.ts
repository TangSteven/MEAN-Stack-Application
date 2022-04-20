import { Component, OnInit } from '@angular/core';

//imported Router to inject into component to allow us to change pages after logging in
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
//importing FormBuilder, and Validators to validate fields to use reactive forms

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //injecting formbuilder as formBuilder into component
  constructor(private formBuilder: FormBuilder, private router: Router) { } 

  //creating a formgroup for the form
  loginForm = this.formBuilder.group({
    //first parameter in array is the initial value
    //the rest of the optional parameters are the validators
    // you create. ex: validator of 10 digit numbers
    username: ['', [Validators.required]],
    password: ['',[Validators.required, , Validators.minLength(10)]],
  })

  
  ngOnInit(): void {

  }

  login() {
    console.log("Logging in");
    this.router.navigate(['/home']);
  }

}
