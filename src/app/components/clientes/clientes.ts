import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {

  clientesService = inject(ClientesService);

  nome: string = '';
  email: string = '';
  senha: string = '';

  clienteLogado: any = null;

  ngOnInit(): void {

    const emailUsuario = sessionStorage.getItem('emailUsuario');

    if (emailUsuario) {

      this.clienteLogado = this.clientesService.clientes.find(
        cliente => cliente.email === emailUsuario
      );

    }
  }

  cadastrarCliente() {

    if (this.nome.trim() === '' || this.email.trim() === '' || this.senha.trim() === '') {
      alert('Preencha todos os campos.');
      return;
    }

    const emailJaExiste = this.clientesService.clientes.find(
      cliente => cliente.email === this.email
    );

    if (emailJaExiste) {
      alert('Este e-mail já está cadastrado! Faça login.');
      return;
    }

    const cliente = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.clientesService.clientes.push(cliente);

    alert('Cliente cadastrado com sucesso!');

    this.clienteLogado = cliente;

    sessionStorage.setItem('tipoUsuario', 'cliente');
    sessionStorage.setItem('emailUsuario', cliente.email);

    this.nome = '';
    this.email = '';
    this.senha = '';
  }
}