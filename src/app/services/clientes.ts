
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  http = inject(HttpClient);

  url = 'http://localhost:3000/clientes';

  listar() {
    return this.http.get<Cliente[]>(this.url);
  }

  cadastrar(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente);
  }

  buscarPorId(id: string) {
    return this.http.get<Cliente>(`${this.url}/${id}`);
  }

  alterar(cliente: Cliente) {
    return this.http.put<Cliente>(
      `${this.url}/${cliente.id}`, cliente
    );
  }

  excluir(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}

