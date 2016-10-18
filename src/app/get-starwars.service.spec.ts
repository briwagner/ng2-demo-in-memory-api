/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetStarwarsService } from './get-starwars.service';

describe('Service: GetStarwars', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetStarwarsService]
    });
  });

  it('should ...', inject([GetStarwarsService], (service: GetStarwarsService) => {
    expect(service).toBeTruthy();
  }));
});
