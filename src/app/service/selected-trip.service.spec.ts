import { TestBed } from '@angular/core/testing';

import { SelectedTripService } from './selected-trip.service';

describe('SelectedTripService', () => {
  let service: SelectedTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
