import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Hero } from '../hero';
import { HeroService } from './hero.service';
import {Subscription} from "rxjs";
import {Observable} from "rxjs/Observable"

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute, private heroService: HeroService) {}

  hero: Observable<Hero>;
  private sub: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.hero = this.heroService.getHero(params['id']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
