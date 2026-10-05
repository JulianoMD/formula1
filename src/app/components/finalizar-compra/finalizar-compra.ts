import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-finalizar-compra',
  imports: [RouterLink],
  templateUrl: './finalizar-compra.html',
  styleUrl: './finalizar-compra.css',
})
export class FinalizarCompra {

  router = inject(Router);
  carrinhoService = inject(CarrinhoService);
  clienteLogado: boolean = false;

  ngOnInit(): void {

  const tipoUsuario = sessionStorage.getItem('tipoUsuario');

  if (tipoUsuario === 'cliente') {
    this.clienteLogado = true;
  }

}

  irParaLogin() {
    sessionStorage.setItem('finalizandoCompra', 'true');
    this.router.navigate(['/login']);
  }

  irParaCadastro() {
    sessionStorage.setItem('finalizandoCompra', 'true');
    this.router.navigate(['/clientes']);
  }

  confirmarCompra() {

  alert('Compra realizada com sucesso!');

  this.carrinhoService.limpar();

  this.router.navigate(['/']);

}
}
