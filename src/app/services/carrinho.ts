import { Injectable } from '@angular/core';
import { Produto } from './produtos';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  private itens: Produto[] = [];

  adicionar(produto: Produto) {
    this.itens.push(produto);
  }

  remover(id: number) {
    const indice = this.itens.findIndex((item) => item.id === id);

    if (indice !== -1) {
      this.itens.splice(indice, 1);
    }
  }

  listar() {
    return this.itens;
  }

  quantidade() {
    return this.itens.length;
  }

  total() {
    return this.itens.reduce((soma, item) => soma + item.preco, 0);
  }

  limpar() {
    this.itens = [];
  }
}
