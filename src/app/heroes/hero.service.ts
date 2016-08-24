import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero } from '../hero';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Response } from '@angular/http';

@Injectable()
export class HeroService {
  private apiKeyQueryString = 'apikey=1a42c6980d795ad681df8b3d11d4f43d';
  private marvelApiUrl = 'http://gateway.marvel.com/v1/';

  constructor (private http: Http) {}

  getHero(id: string) {
    return this.http.get(this.appendApikey(this.marvelApiUrl + "/public/characters/" + id))
      .map(this.extractHero)
      .catch(this.handleError);
  }

  getHeroes() {
    return this.http.get(this.appendApikey(this.marvelApiUrl + "/public/characters"))
      .map(this.extractListOfHeroes)
      .catch(this.handleError);
  }

  private appendApikey(url: string) {
    if(url.match("\\?")) {
      return url.replace("?", "?" + this.apiKeyQueryString);
    } else {
      return url + "?" + this.apiKeyQueryString;
    }
  }


  private extractListOfHeroes(res: Response) {
    let body = res.json();
    return body.data.results || { };
  }

  private extractHero(res: Response) {
    let body = res.json();
    return body.data.results[0] || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
