import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {

  nome: string = '';
  email: string = '';
  senha: string = '';

    clientesService = inject(ClientesService);

  get clientes() {
    return this.clientesService.clientes;
  }
  
  clienteEditando: any = null;

cadastrarCliente() {

  if (this.clienteEditando) {

    this.clienteEditando.nome = this.nome;
    this.clienteEditando.email = this.email;
    this.clienteEditando.senha = this.senha;

    alert('Cliente alterado com sucesso!');

    this.clienteEditando = null;

  } else {

    const cliente = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.clientes.push(cliente);

    console.log('Clientes no Service:', this.clientes);

    alert('Cliente cadastrado com sucesso!');

  }

}

editarCliente(cliente: any) {
  
   this.clienteEditando = cliente;

  this.nome = cliente.nome;
  this.email = cliente.email;
  this.senha = cliente.senha;

}

excluirCliente(cliente: any) {

  const indice = this.clientes.indexOf(cliente);

  this.clientes.splice(indice, 1);

  alert('Cliente excluído com sucesso!');

}

}
