import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


import { ProdutosService } from '../../services/produtos';

import { CarrinhoService } from '../../services/carrinho';
import { Produto } from '../../model/produto';


@Component({
  selector: 'app-produtos',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {
  private produtosService = inject(ProdutosService);
  carrinhoService = inject(CarrinhoService);

  listaProdutos: Produto[] = [];

  mensagem = '';

  ngOnInit(): void {
    this.produtosService.listar().subscribe(produtos => {
      this.listaProdutos = produtos;
    });
  }


  adicionar(produto: Produto) {
    this.carrinhoService.adicionar(produto);

    this.mensagem = `${produto.nome} foi adicionado ao carrinho.`;
  }
}
