import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'reg-nav',
  templateUrl: './reg-nav.component.html',
  styleUrls: ['./reg-nav.component.css']
})
export class RegNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeToLogin() {
    this.router.navigate(['']);
  }

}
