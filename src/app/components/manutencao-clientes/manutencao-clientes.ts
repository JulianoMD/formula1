import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-clientes',
  imports: [FormsModule],
  templateUrl: './manutencao-clientes.html',
  styleUrl: './manutencao-clientes.css',
})
export class ManutencaoClientes implements OnInit {

  clientesService = inject(ClientesService);
  router = inject(Router);

  clientes: any[] = [];

  nome: string = '';
  email: string = '';
  senha: string = '';

  clienteEditando: any = null;

 ngOnInit(): void {

  const tipoUsuario = sessionStorage.getItem('tipoUsuario');

  if (tipoUsuario !== 'admin') {
    alert('Acesso permitido somente ao administrador.');
    this.router.navigate(['/']);
    return;
  }

  this.clientes = this.clientesService.clientes;
}

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

      this.clientesService.clientes.push(cliente);

      alert('Cliente cadastrado com sucesso!');
    }

    this.limparFormulario();
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

  limparFormulario() {

    this.nome = '';
    this.email = '';
    this.senha = '';
  }
}
