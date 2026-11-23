import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  carrinhoService = inject(CarrinhoService);

  itensMenu = [
    { label: 'Início', link: '/' },
    { label: 'Produtos', link: '/produtos' },
    { label: 'Carrinho', link: '/carrinho' },
    { label: 'Cadastro de Clientes', link: '/admin-clientes-listar' }
  ];

  isAdmin(): boolean {
    return sessionStorage.getItem('tipoUsuario') === 'admin';
  }

  estaLogado(): boolean {
    return sessionStorage.getItem('tipoUsuario') !== null;
  }

  sair() {
    sessionStorage.removeItem('tipoUsuario');
    sessionStorage.removeItem('emailUsuario');
    alert('Você saiu da sua conta.');
  }
}
