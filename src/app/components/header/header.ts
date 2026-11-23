
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';
import { ClienteService } from '../../services/clientes';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  carrinhoService = inject(CarrinhoService);

  clienteService = inject(ClienteService);

  itensMenu = [
    { label: 'Início', link: '/' },
    { label: 'Produtos', link: '/produtos' },
    { label: 'Carrinho', link: '/carrinho' },
    { label: 'Cadastro de Clientes', link: '/admin-clientes-listar' }
  ];

  isAdmin(): boolean {
    return this.clienteService.tipoUsuario === 'admin';
  }

  estaLogado(): boolean {
    return this.clienteService.tipoUsuario !== '';
  }

  sair() {
    this.clienteService.tipoUsuario = '';
    alert('Você saiu da sua conta.');
  }

}

