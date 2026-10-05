import { Injectable } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  private produtos: Produto[] = [
    {
      id: 1,
      nome: 'Ferrari F2004',
      categoria: '1:43 · Coleção Premium',
      preco: 190.9,
      descricao: 'Carro de Michael Schumacher na temporada de 2004, quando a Ferrari venceu 15 das 18 corridas e Schumacher conquistou seu sétimo título mundial.',
      cor: '#b61d25',
    },
    {
      id: 2,
      nome: 'McLaren MP4/4',
      categoria: '1:43 · Edição Clássica',
      preco: 189.9,
      descricao: 'Carro de Ayrton Senna e Alain Prost em 1988, que venceu 15 das 16 corridas do ano e deu a Senna seu primeiro título mundial.',
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
