import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Person } from '../people/person';

@Injectable()
export class GetStarwarsService {

  private starwarsUrl = 'http://swapi.co/api';

  constructor(
    private http: Http
  ) { }

  fetchStarwarriors() {
    let warriors = this.http.get(this.starwarsUrl + '/people', {headers: this.getHeaders()})
                            .map(this.handleResponse);
    return warriors;
  }

  handleResponse(response: Response) {
    return response.json().results.map(makePerson);
  }

  getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

function makePerson(d) {
  let person = <Person>({
    name: d.name,
    hair_color: d.hair_color,
    gender: d.gender
  });
  return person;
}
