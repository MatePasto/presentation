import { Component, OnDestroy } from '@angular/core'
import { RouterOutlet, Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs/operators'
import { Location } from '@angular/common'
import { Observer } from 'rxjs'
import { slideInAnimation } from './assets/route-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})

export class AppComponent {
  title = 'project'
  public currentRoute = '/'

  constructor(private router: Router) {
    console.log(router.url)

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const nav = event as NavigationEnd
        nav.url == '/'
      })
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
