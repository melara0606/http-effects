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
    return this.http.get(`${this.url}/asss/users?per_page=6`)
      .pipe(
        map(response => response['data'])
      );
  }
}
