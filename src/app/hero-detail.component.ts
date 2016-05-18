import { Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated'
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  constructor(private routeParams: RouteParams, private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHero(parseInt(this.routeParams.get('id'), 10)).subscribe(hero => this.hero = hero);
  }

  hero: Hero;
}
