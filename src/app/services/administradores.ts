import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Administrador } from '../model/administrador';

@Injectable({
  providedIn: 'root',
})
export class AdministradoresService {
  http = inject(HttpClient);

  url = 'http://localhost:3000/administradores';

  listar() {
    return this.http.get<Administrador[]>(this.url);
  }
}
