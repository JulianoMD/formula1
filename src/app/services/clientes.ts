import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private readonly API = 'http://localhost:3000/clientes';
  tipoUsuario: string = '';

  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  buscarPorId(id: string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    console.log('Enviando cliente para inclusão:', cliente);
    return this.http.post<Cliente>(this.API, cliente);
  }

  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.incluir(cliente);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}