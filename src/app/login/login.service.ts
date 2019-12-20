import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}

  login() {
    const CLIENT_ID = "ecc44d1e04cf4168bfa9c9141e99a114";
    const SCOPES = [];
    const REDIRECT_URI = "http://localhost:4200/login/";
    // tslint:disable-next-line: max-line-length
    const URL_LOGIN = `https://accounts.spotify.com/en/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${SCOPES}`;
    return new Promise(resolve => {
      resolve(URL_LOGIN);
    });
  }

  getToken() {
    return window.localStorage.getItem("ferromex::playlist::token");
  }

  setToken(token) {
    return window.localStorage.setItem("ferromex::playlist::token", token);
  }
}
