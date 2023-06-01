import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repeat, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private isLoggedIn = false;

  constructor(private readonly http: HttpClient) {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') == 'true' ? true : false || false;
  }

  setAuth(status: boolean) {
    localStorage.setItem('isLoggedIn', `${status}`);

    this.isLoggedIn = status;
  }

  isAuth() {
    return this.isLoggedIn;
  }

  login(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const params = new HttpParams().set('username', username).set('password', password);
      const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      this.http.post('/api/login', params, { headers })
        .pipe(
          repeat({ delay: 50 }),
          retry(1)
        )
        .subscribe({
          error: (error) => {
            this.setAuth(error.status == 200);

            error.status == 200 ? resolve() : reject()
          }
        });
    })
  }

  logout(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/logout', { }, { withCredentials: true })
        .subscribe({
          error: (error) => {
            this.setAuth(!(error.status == 200));

            error.status == 200 ? resolve() : reject()
          }
        });
    })
  }
}
