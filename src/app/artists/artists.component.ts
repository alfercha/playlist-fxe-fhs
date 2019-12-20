import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../login/login.service';

interface Response {
  artists: { items: [] };
}

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artist = '';
  artists = [];

  constructor(
    private artistService: ArtistService
  ) {
  }

  ngOnInit() {

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void {}

  searchArtist() {
    this.artistService
      .getSongs(this.artist)
      .then((response: Response) => {
        console.log(response);
        this.artists = response.artists.items;
      })
      .catch(error => console.log(error));
  }
}
