import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private backend:ServerService ) {}
  
  user = ''
  foods = this.backend.getFoods(this.user).subscribe
  

  ngOnInit(): void {
  }



}
