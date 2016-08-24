import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HTTP_PROVIDERS} from '@angular/http';
import { HeroListComponent }    from './hero-list.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { HeroService } from './hero.service';

import { heroesRouting } from './heroes.routing';

@NgModule({
  imports: [
    CommonModule,
    heroesRouting,
    FormsModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService,
    HTTP_PROVIDERS
  ]
})
export class HeroesModule {}
