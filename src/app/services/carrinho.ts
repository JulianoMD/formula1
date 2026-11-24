import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';
import { ItemCarrinho } from '../model/item-carrinho';

// Define o serviço como injetável globalmente na raiz do projeto 
@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  // Cria o array vazio para armazenar os itens do carrinho
  itens: ItemCarrinho[] = [];

  // Método para adicionar um produto ao carrinho
  adicionar(produto: Produto) {
   
    for (let item of this.itens) {
      // Verifica se o produto já existe no carrinho usando
      if (item.produto.id === produto.id) {
        item.quantidade++;
        return;
      }
    }

    this.itens.push({
      produto: produto,
      quantidade: 1
    });
  }

  // Método para diminuir 1 unidade de um produto pelo ID
  diminuir(id: string) {
  
    for (let item of this.itens) {
      if (item.produto.id === id) {
        if (item.quantidade > 1) {
          item.quantidade--; 
        } else {
          this.remover(id);
        }
        return; // Encerra a função após alterar
      }
    }
  }

  // Método para remover um produto do carrinho pelo ID
  remover(id: string) {
    this.itens = this.itens.filter(item => item.produto.id !== id);
  }

  // Método que calcula o valor total da compra
  total(): number {
    let soma = 0;
    for (let item of this.itens) {
      soma += item.produto.preco * item.quantidade;
    }
    return soma; // Retorna o total calculado
  }

  // Método que soma a quantidade total de peças no carrinho
  quantidade(): number {
    let total = 0; 
    for (let item of this.itens) {
      total += item.quantidade;
    }
    return total; // Retorna o total de itens
  }

  limpar() {
    this.itens = [];
  }
}
