import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css'],
  directives: [ HeroDetailComponent ]
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  selectedHero = {};

  constructor(private heroService: HeroService,
    private router:Router) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: Hero) {
    let link = ['/hero', hero.id]
    this.router.navigate(link);
  }
}
