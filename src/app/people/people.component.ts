import { Component, OnInit } from '@angular/core';

// model
import { Person } from './person';

// data services
import { GetPeopleService } from '../services/get-people.service';
import { GetStarwarsService } from '../services/get-starwars.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people;
  starwarriors;

  constructor(
    private getpeople: GetPeopleService, // make a private instance to avoid conflicts w/ other components
    private getstarwarriors: GetStarwarsService
  ) { }

  ngOnInit() {
    this.getpeople.fetchPeople()
                  .subscribe(
                    p => this.people = p,
                    e => console.log('error', e),
                    // () => console.log('complete people')
                  );

    this.getstarwarriors.fetchStarwarriors()
                        .subscribe(
                          p => this.starwarriors = p,
                          e => console.log('sw fail', e),
                          // () => console.log('star wars complete')
                        );
  }

}
