import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'https://reqres.in/api';

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.url}/users?per_page=6`)
      .pipe(
        map(response => response['data'])
      );
  }

  getUserById(id: string) {
    return this.http.get(`${this.url}/users/${ id }`)
      .pipe(
        map(response => response['data'])
      );
  }
}

