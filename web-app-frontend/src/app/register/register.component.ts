import { Component, OnInit } from '@angular/core';

//check comments on formbuilder/validators on LoginComponent
import { FormBuilder, Validators } from '@angular/forms';

import {Router } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private backend: ServerService) { }

  registerForm = this.formBuilder.group( {
    user: ['', [Validators.required]],
    pass: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(10)]],
  })

  ngOnInit(): void {
  }

  confirmPassword() {
    return this.registerForm.value.pass == this.registerForm.value.confirmPassword;
  }


  register() {
    console.log("registering");
    if (this.confirmPassword()) {
      this.backend.register({"user": this.registerForm.value.user, "pass": this.registerForm.value.pass}).subscribe(query => {
        if (query) {
          alert("Your account has been created. Please log in.");
          this.router.navigate(['']);
        }
       
      })
      
    }
    else {
      alert("The passwords must be the same.");
    }
    
  }

}
