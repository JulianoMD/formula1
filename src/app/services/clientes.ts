import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  listaClientes: any[] = [];

  tipoUsuario: string = '';

  listar() {
    return this.listaClientes;
  }

  cadastrar(cliente: any) {
    this.listaClientes.push(cliente);
  }

}