import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'intro.component',
	templateUrl: './intro.component.html',
	styleUrls: ['./intro.component.css']
})

export class IntroComponent {
  constructor(
  	private router: Router
  ) { }

  navigate() {
    this.router.navigate(['/profile'])
  }
}
