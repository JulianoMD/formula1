
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';
import { ClienteService } from '../../services/clientes';

@Component({
  selector: 'app-finalizar-compra',
  imports: [RouterLink],
  templateUrl: './finalizar-compra.html',
  styleUrl: './finalizar-compra.css',
})
export class FinalizarCompra implements OnInit {

  router = inject(Router);
  carrinhoService = inject(CarrinhoService);
  clienteService = inject(ClienteService);

  clienteLogado: boolean = false;

  ngOnInit(): void {

    if (this.clienteService.tipoUsuario === 'cliente') {
      this.clienteLogado = true;
    }

  }

  irParaLogin() {
    this.router.navigate(['/login']);
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro-cliente']);
  }

  confirmarCompra() {

    if (this.clienteLogado) {

      alert('Compra realizada com sucesso!');

      this.carrinhoService.limpar();

      this.router.navigate(['/']);

    }

  }

}

