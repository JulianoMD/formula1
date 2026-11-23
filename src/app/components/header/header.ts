import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';
import { ClienteService } from '../../services/clientes';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
    public carrinhoService: CarrinhoService,
    public clienteService: ClienteService
  ) {}

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