import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'profile.component',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  constructor(
  	private router: Router
  ) { }

  navigate() {
  	this.router.navigate(['/'])
  }

}
