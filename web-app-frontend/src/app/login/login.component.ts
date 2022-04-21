import { Component, OnInit } from '@angular/core';

//imported Router to inject into component to allow us to change pages after logging in
import { Router } from '@angular/router';

import { Validators } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
//importing FormBuilder, and Validators to validate fields to use reactive forms

import { ServerService } from '../services/server.service';
//injecting service to access the express backend

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //injecting formbuilder as formBuilder into component
  constructor(private formBuilder: FormBuilder, private router: Router, private backend: ServerService) { } 

  user = '';
  //creating a formgroup for the form
  loginForm = this.formBuilder.group({
    //first parameter in array is the initial value
    //the rest of the optional parameters are the validators
    // you create. ex: validator of 10 digit numbers
    user: ['', [Validators.required]],
    pass: ['',[Validators.required]],
  })

  
  ngOnInit(): void {

  }

  login() {
    //console.log(this.loginForm.value);
    //this.loginform.value is a json of the fields, can check by printing this.loginform
    //uses the services function, and the json as req.body
    this.backend.login(this.loginForm.value).subscribe( query => {
      if (query) { // if the login was correct
        console.log("correct login", query);
        this.user = this.loginForm.value.user;
        this.router.navigate(['/home']); //navigate to home page
      }
      else { //if login was incorrect
        alert("WRONG PASSWORD OR WRONG USERNAME");
      }
    })
    
  }

}
