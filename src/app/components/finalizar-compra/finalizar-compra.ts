import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';
import { PedidosService } from '../../services/pedidos';
import { Pedido } from '../../model/pedido';

@Component({
  selector: 'app-finalizar-compra',
  imports: [RouterLink],
  templateUrl: './finalizar-compra.html',
  styleUrl: './finalizar-compra.css',
})
export class FinalizarCompra {

  router = inject(Router);
  carrinhoService = inject(CarrinhoService);
  pedidosService = inject(PedidosService);

  clienteLogado: boolean = sessionStorage.getItem('tipoUsuario') === 'cliente';

  confirmarCompra() {

    const pedido: Pedido = {
      emailCliente: sessionStorage.getItem('emailUsuario') ?? '',
      itens: this.carrinhoService.itens,
      total: this.carrinhoService.total(),
      data: new Date().toLocaleString('pt-BR')
    };

    this.pedidosService.salvar(pedido).subscribe({
      next: (pedidoSalvo) => {
        alert(`Compra realizada com sucesso! Pedido nº ${pedidoSalvo.id}`);
        this.carrinhoService.limpar();
        this.router.navigate(['/']);
      },
      error: () => alert('Erro ao salvar o pedido.')
    });

  }

}
