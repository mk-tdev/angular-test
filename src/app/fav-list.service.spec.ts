import { TestBed } from '@angular/core/testing';

import { FavListService } from './fav-list.service';

describe('FavListService', () => {
  let service: FavListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
