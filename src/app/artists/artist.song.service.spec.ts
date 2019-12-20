import { TestBed } from '@angular/core/testing';

import { Artist.SongService } from './artist.song.service';

describe('Artist.SongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Artist.SongService = TestBed.get(Artist.SongService);
    expect(service).toBeTruthy();
  });
});
