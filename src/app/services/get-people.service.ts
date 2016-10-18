import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// model
import { Person } from '../people/person';

@Injectable()
export class GetPeopleService {

  private peopleUrl = "app/complicated_production_url_path";

  constructor(
    private http: Http
  ) { }

  fetchPeople() {
    let people = this.http.get(this.peopleUrl)
                          .map(this.handleResponse);
    return people;
  }

  handleResponse(response: Response) {
    // ElasticSearch doesnt return a data property
    // internal web api does 
    if (response.json().data) { 
      return response.json().data.hits.hits.map( makePerson );
    } else {
      return response.json().hits.hits.map( makePerson );
    }
  }

}

function makePerson(d) {
  let person = <Person>({
    name: d._source.name,
    hair_color: d._source.hair_color,
    gender: d._source.gender
  });
  return person;
}