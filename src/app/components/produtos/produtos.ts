import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Produto, ProdutosService } from '../../services/produtos';

import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {
  produtosService = inject(ProdutosService);

  carrinhoService = inject(CarrinhoService);

  mensagem = '';

  adicionar(produto: Produto) {
    this.carrinhoService.adicionar(produto);

    this.mensagem = `${produto.nome} foi adicionado ao carrinho.`;
  }
}
