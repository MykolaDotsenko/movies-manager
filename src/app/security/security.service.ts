import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthenticationResponseDTO, UserCredentialsDTO } from './security.models';
import { Observable, pipe, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor() { }

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/users'
  private readonly keyToken = 'token';
  private readonly keyExpiration = 'token-expiration';


  register(credentials: UserCredentialsDTO): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(`${this.baseURL}/register`, credentials)
    .pipe(
      tap(autentificationResponse => this.storeToken(autentificationResponse))
    );
  }


  login(credentials: UserCredentialsDTO): Observable<AuthenticationResponseDTO> {
    return this.http.post<AuthenticationResponseDTO>(`${this.baseURL}/login`, credentials)
    .pipe(
      tap(autentificationResponse => this.storeToken(autentificationResponse))
    );
  }

  storeToken(autentificationResponse: AuthenticationResponseDTO) {
    localStorage.setItem(this.keyToken, autentificationResponse.token);
    localStorage.setItem(this.keyExpiration, autentificationResponse.expiration.toString());
  }

  isLoggedIn(): boolean {
    const token = this.getJWTToken();

    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.keyExpiration)!;
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }
    return true;

  }


getJWTClaim(field: string): string {
  const token = this.getJWTToken();
  if (!token) {
    return '';
  }

  const dataToken = JSON.parse(atob(token.split('.')[1]));
  return dataToken[field];
}


  logout(){
    localStorage.removeItem(this.keyToken);
    localStorage.removeItem(this.keyExpiration);
  }

  getJWTToken(): string | null {
    return localStorage.getItem(this.keyToken);
  }

  getRole(): string {
    return '';
  }
}
