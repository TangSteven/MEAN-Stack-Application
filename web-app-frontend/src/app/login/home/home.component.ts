import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { ServerService } from '../../services/server.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods = [];
  user;
  constructor(private router: Router, private backend:ServerService) {
    
  }
  

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.backend.getFoods(this.user).subscribe(foods => {
      this.foods = foods;
    })
  }




}
