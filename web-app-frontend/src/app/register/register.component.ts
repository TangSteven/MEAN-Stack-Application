import { Component, OnInit } from '@angular/core';

//check comments on formbuilder/validators on LoginComponent
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group( {
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(10)]],
  })

  ngOnInit(): void {
  }

}
