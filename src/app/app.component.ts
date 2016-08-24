import { Component } from '@angular/core';
import { HackdayHeroesAppComponent } from './hackday-heroes.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HackdayHeroesAppComponent ]
})
export class AppComponent {
  title = 'app works!';
}
