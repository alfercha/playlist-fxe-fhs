import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: "root"
})
export class ArtistService {
  API_URL = environment.API_URL;
  token = '';

  //songs = null;
  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) {
    this.token = this.loginService.getToken();
  }

  getSongs(nameSong) {
    const ARTISTS_URL = `${this.API_URL}search?q=${nameSong}&type=artist&market=US&limit=3&offset=0`;
    // tslint:disable-next-line: max-line-length
    // const token = 'BQAgc6GWQvwBdJqyX1qCeIN-82gm-OoiDRkS_LlxPJo24yuZwHlrR8HKuogLH4QC1Qp7blsSYFANUhS0akoo--hz5oicBhRrOtlQfJyQiRFDAXPOAjSuvjXn2_bsu9HASuH2l1E';
    return this.httpClient
      .get(ARTISTS_URL, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        })
      })
      .toPromise();
  }

  getAlbumsByArtistId(id) {
    const ALBUM_URL = `${this.API_URL}artists/${id}/albums?include_groups=single%2Cappears_on&market=US&limit=3&offset=0`;
    // tslint:disable-next-line: max-line-length
    // const token = 'BQAgc6GWQvwBdJqyX1qCeIN-82gm-OoiDRkS_LlxPJo24yuZwHlrR8HKuogLH4QC1Qp7blsSYFANUhS0akoo--hz5oicBhRrOtlQfJyQiRFDAXPOAjSuvjXn2_bsu9HASuH2l1E';
    return this.httpClient
      .get(ALBUM_URL, {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`
        })
      })
      .toPromise();
  }
}
