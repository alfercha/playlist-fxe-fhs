import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: "root"
})
export class SongService {
  API_URL = environment.API_URL;
 token = '';

  //songs = null;
  constructor(private httpClient: HttpClient,
              private loginService: LoginService
             ) { this.token = this.loginService.getToken()}

  getSongs(nameSong) {
    const SONGS_URL = `${this.API_URL}search?q=${nameSong}&type=track&market=US&limit=10&offset=0`;
    // tslint:disable-next-line: max-line-length
    // const token = 'BQAYEa5H8pHXCbqZlJeEBmgoPa6wsyBXiMWc92ZNxuYZVRH7kv36bASFvXypjdrTXhByMNtqw5FBWpuoVFWS6i39m7W3IWDKu9NwI8xBz8kbSlKAyOJXAhio2ij2WIlvzKRAjuo';
    return this.httpClient
      .get(SONGS_URL, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        })
      })
      .toPromise();
  }
}
