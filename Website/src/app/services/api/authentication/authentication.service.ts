import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bearer } from './../../../models/api/bearer'
import { Login } from './../../../models/api/login'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userTokenName: string = 'id_token';

  constructor(private http: HttpClient) { }

  login(email: string, password: string ) : Observable<Bearer> {
    var url = "api/authentication/login";

    let login: Login = {
      Username: email,
      Password: password
    };

    return this.http.post<Bearer>(url, login).pipe(map(bearerResponse => {
      if (bearerResponse.Succes) {
        localStorage.setItem(this.userTokenName, bearerResponse.AccessToken); 
      }
      return bearerResponse;
     }));
  }

  logout() {
    localStorage.removeItem(this.userTokenName);
  }

  isUserLoggedIn(): boolean {
    const idToken = localStorage.getItem(this.userTokenName);
    return idToken != null;
  }
}
