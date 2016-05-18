import { Component } from '@angular/core';
import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import { HeroListComponent } from './hero-list.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component( {
  selector: 'tour-of-heroes-app',
  template: `<h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>`,
  directives: [ HeroListComponent, ROUTER_DIRECTIVES ],
  providers: [ HeroService, ROUTER_PROVIDERS ]
})
@RouteConfig([{
  path: '/heroes', name: 'Heroes', component: HeroListComponent, useAsDefault: true
}, {
  path: '/hero/{id}', name: 'Hero', component: HeroDetailComponent
}
])
export class TourOfHeroesAppComponent {
  title = 'tour-of-heroes toimii!';
}
