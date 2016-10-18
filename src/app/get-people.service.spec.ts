/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPeopleService } from './get-people.service';

describe('Service: GetPeople', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPeopleService]
    });
  });

  it('should ...', inject([GetPeopleService], (service: GetPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
