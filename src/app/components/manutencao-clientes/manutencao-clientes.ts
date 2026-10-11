import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes';
import { Cliente } from '../../model/cliente';
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

  clientes: Cliente[] = [];

  nome: string = '';
  email: string = '';
  senha: string = '';

  clienteEditando: Cliente | null = null;

  ngOnInit(): void {

    const tipoUsuario = sessionStorage.getItem('tipoUsuario');

    if (tipoUsuario !== 'admin') {
      alert('Acesso permitido somente ao administrador.');
      this.router.navigate(['/']);
      return;
    }

    this.carregarClientes();
  }

  carregarClientes() {
    this.clientesService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  cadastrarCliente() {

    if (this.nome.trim() === '' || this.email.trim() === '' || this.senha.trim() === '') {
      alert('Preencha todos os campos.');
      return;
    }

    const emailJaExiste = this.clientes.find(
      cliente => cliente.email === this.email && cliente !== this.clienteEditando
    );

    if (emailJaExiste) {
      alert('Este e-mail já está cadastrado!');
      return;
    }

    if (this.clienteEditando) {

      const clienteAlterado: Cliente = {
        id: this.clienteEditando.id,
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };

      this.clientesService.alterar(clienteAlterado).subscribe(() => {
        alert('Cliente alterado com sucesso!');
        this.clienteEditando = null;
        this.limparFormulario();
        this.carregarClientes();
      });

    } else {

      const cliente: Cliente = {
        id: '',
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };

      this.clientesService.adicionar(cliente).subscribe(() => {
        alert('Cliente cadastrado com sucesso!');
        this.limparFormulario();
        this.carregarClientes();
      });
    }
  }

  editarCliente(cliente: Cliente) {

    this.clienteEditando = cliente;

    this.nome = cliente.nome;
    this.email = cliente.email;
    this.senha = cliente.senha;
  }

  excluirCliente(cliente: Cliente) {

    this.clientesService.excluir(cliente.id).subscribe(() => {
      alert('Cliente excluído com sucesso!');
      this.carregarClientes();
    });
  }

  limparFormulario() {

    this.nome = '';
    this.email = '';
    this.senha = '';
  }
}
