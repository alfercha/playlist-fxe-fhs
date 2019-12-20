import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

interface Response {
  tracks: {
    items: []
  }
}

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  newSong = '';
  songs = [];


  constructor(private songService: SongService, private loginService: LoginService,
              private router: Router) {

   }

  ngOnInit() {
    if(!this.loginService.getToken()){
      this.router.navigate(['login']);
    }
  }

  searchSong() {
this.songService.getSongs(this.newSong)
.then((response: Response) => {
    console.log(response)
    this.songs = response.tracks.items;
})
.catch(error => console.log(error));
}


addSong() {
    console.log('AddSong');
    console.log(this.newSong);
    this.songs.push({
      name: this.newSong,
      artist: 'Jose jose',
      url: 'http://spotify.com'
    });
  }

}
