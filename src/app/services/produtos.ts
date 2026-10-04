import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Apex GP 01',
      categoria: '1:43 · Edição Clássica',
      preco: 149.9,
      descricao: 'Miniatura inspirada no visual dos carros de competição clássicos.',
      cor: '#b61d25',
    },
    {
      id: 2,
      nome: 'Rosso Corse 16',
      categoria: '1:43 · Série Racing',
      preco: 169.9,
      descricao: 'Modelo com acabamento vermelho e visual agressivo de pista.',
      cor: '#7f1d1d',
    },
    {
      id: 3,
      nome: 'Papaya Speed 04',
      categoria: '1:43 · Série Sprint',
      preco: 159.9,
      descricao: 'Miniatura laranja para quem gosta de modelos marcantes.',
      cor: '#c55b16',
    },
    {
      id: 4,
      nome: 'Emerald GP 63',
      categoria: '1:43 · Coleção Premium',
      preco: 189.9,
      descricao: 'Modelo de coleção com acabamento verde escuro.',
      cor: '#14532d',
    },
    {
      id: 5,
      nome: 'Blue Falcon 11',
      categoria: '1:43 · Série Velocity',
      preco: 154.9,
      descricao: 'Miniatura azul com linhas inspiradas nos carros modernos de corrida.',
      cor: '#1d4ed8',
    },
    {
      id: 6,
      nome: 'Titan Motorsport 22',
      categoria: '1:43 · Edição Limitada',
      preco: 219.9,
      descricao: 'Modelo especial pensado para ficar em destaque na estante.',
      cor: '#374151',
    },
  ];

  listar() {
    return this.produtos;
  }

  adicionar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produtoAlterado: Produto) {

    const indice = this.produtos.findIndex(
      produto => produto.id === produtoAlterado.id
    );

    if (indice !== -1) {
      this.produtos[indice] = produtoAlterado;
    }

  }

  excluir(id: number) {

    const indice = this.produtos.findIndex(
      produto => produto.id === id
    );

    if (indice !== -1) {
      this.produtos.splice(indice, 1);
    }

  }

  buscarPorId(id: number) {
    return this.produtos.find((produto) => produto.id === id);
  }

}
