import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
var heroes: Hero[] = [
  { id: 1, name:'Wolverine'},
  { id: 2, name:'Cyclops'}
]

@Injectable()
export class HeroService {
  getHeroes() {
    return Observable.of(heroes);
  }

  getHero(id: number) {
    const findHero = (hero) => hero.id === id;
    return this.getHeroes().map(heroes => heroes.filter(findHero)[0]);
  }
}
