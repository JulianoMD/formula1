import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { ItemCarrinho } from '../model/item-carrinho';

@Injectable({ providedIn: 'root' })
export class CarrinhoService {
  itens: ItemCarrinho[] = [];

  adicionar(produto: Produto) {
    const existente = this.itens.find(i => i.produto.id === produto.id);
    if (existente) {
      existente.quantidade++;
    } else {
      this.itens.push({ produto, quantidade: 1 });
    }
  }

  remover(id: number) {
    this.itens = this.itens.filter(i => i.produto.id !== id);
  }

  total(): number {
    return this.itens.reduce((soma, i) => soma + i.produto.preco * i.quantidade, 0);
  }

  quantidade(): number {
    return this.itens.reduce((soma, i) => soma + i.quantidade, 0);
  }

  limpar() {
    this.itens = [];
  }
}