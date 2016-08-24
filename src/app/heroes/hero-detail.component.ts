import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Hero } from '../hero';
import { HeroService } from './hero.service';
import {Subscription} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'hero-detail',
  templateUrl: 'hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{
  constructor(private router: Router, private route: ActivatedRoute, private heroService: HeroService) {}

  hero: Hero;
  private sub: Subscription;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
