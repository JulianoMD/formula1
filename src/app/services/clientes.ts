import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {

  http = inject(HttpClient);

  url = 'http://localhost:3000/clientes';

  listar() {
    return this.http.get<Cliente[]>(this.url);
  }

  adicionar(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente);
  }

  alterar(cliente: Cliente) {
    return this.http.put<Cliente>(`${this.url}/${cliente.id}`, cliente);
  }

  excluir(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
