import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repeat, retry } from 'rxjs';
import { AuthenticationStore } from './authentication.store';

@Injectable()
export class AuthenticationService {

  constructor(
    private readonly http: HttpClient,
    private readonly authStore: AuthenticationStore
  ) { }

  getAuthStatus() {
    return this.authStore.getAuthStatus();
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
            this.authStore.setAuthStatus(error.status == 200);

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
            this.authStore.setAuthStatus(!(error.status == 200));

            error.status == 200 ? resolve() : reject()
          }
        });
    })
  }
}

