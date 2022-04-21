import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginComponent } from '../login.component';
import { ServerService } from '../../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods = [];

  constructor(private router: Router, private backend:ServerService, private login: LoginComponent) {
    
    this.backend.getFoods(this.login.user).subscribe( query => {
      this.foods = query;
    })
  }
  
  
  

  ngOnInit(): void {
  }



}
