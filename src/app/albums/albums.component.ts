import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../artists/artist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  artistId = '';
  ​
    albums = [];
  ​
    constructor(
      private activatedRoute: ActivatedRoute,
      private artistService: ArtistService) {
      this.activatedRoute.paramMap.subscribe((route: any) => {
        console.log(route.params.id);
        this.artistId = route.params.id;
      });
  }

  ngOnInit() {
    this.artistService.getAlbumsByArtistId(this.artistId)
      .then((response: any) => {
        console.log(response);
        this.albums = response.items;
      })
      .catch(error => console.log(error));
    }
}
