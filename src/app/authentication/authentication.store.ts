import { Injectable } from '@angular/core';
import { NgSimpleStateBaseStore, NgSimpleStateStoreConfig } from 'ng-simple-state';
import { Observable } from 'rxjs';
import { AuthenticationState } from './authentication.state';

@Injectable()
export class AuthenticationStore extends NgSimpleStateBaseStore<AuthenticationState> {

  storeConfig(): NgSimpleStateStoreConfig {
    return {
      storeName: 'AuthenticationStore',
      enableLocalStorage: true,
      persistentStorage: 'local'
    };
  }
  
  initialState(): AuthenticationState {
    return {
      isAuth: false
    };
  }

  getAuthStatus(): Observable<boolean> {
    return this.selectState(state => state.isAuth);
  }

  setAuthStatus(status: boolean): void {
    this.setState(state => ({ isAuth: status }));
  }
}