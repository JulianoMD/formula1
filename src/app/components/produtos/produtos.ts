import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


import { ProdutosService } from '../../services/produtos';

import { CarrinhoService } from '../../services/carrinho';
import { Produto } from '../../model/produto';                


@Component({
  selector: 'app-produtos',
  standalone: true,                                           
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
    this.listaProdutos = this.produtosService.listar();
  }


  adicionar(produto: Produto) {
    this.carrinhoService.adicionar(produto);

    this.mensagem = `${produto.nome} foi adicionado ao carrinho.`;
  }
}
