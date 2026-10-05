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
      imagem: 'imagens/ferrarif2004.png',

    },
    {
      id: 2,
      nome: 'McLaren MP4/4',
      categoria: '1:43 · Edição Clássica',
      preco: 189.9,
      descricao: 'Carro de Ayrton Senna e Alain Prost em 1988, que venceu 15 das 16 corridas do ano e deu a Senna seu primeiro título mundial.',
      cor: '#7f1d1d',
      imagem: 'imagens/mclarenmp4.png',

    },

   {
      id: 3,
      nome: 'Williams FW14B',
      categoria: '1:43 · Série Velocity',
      preco: 159.9,
      descricao: 'Carro de Nigel Mansell em 1992, famoso pela suspensão ativa e pelo motor Renault V10, que dominou aquela temporada.',
      cor: '#c55b16',
      imagem: 'imagens/williamsfw14b.png',

    },
    {
      id: 4,
      nome: 'Brawn BGP 001',
      categoria: '1:43 · Edição Limitada',
      preco: 219.9,
      descricao: 'Carro de Jenson Button em 2009, criado a partir da antiga equipe Honda. Foi campeão logo no primeiro ano e venceu seis das sete primeiras corridas.',
      cor: '#14532d',
      imagem: 'imagens/brawbgp001.png',

    },

        {
      id: 5,
      nome: 'Mercedes F1 W11',
      categoria: '1:43 · Coleção Premium',
      preco: 197.0,
      descricao: 'Carro de Lewis Hamilton em 2020, com pintura preta. Venceu 13 das 17 corridas e deu a Hamilton seu sétimo título, igualando o recorde de Schumacher.',
      cor: '#111111',
      imagem: 'imagens/mercedesw11.png',
    },
    {
      id: 6,
      nome: 'Red Bull RB19',
      categoria: '1:43 · Edição Limitada',
      preco: 167.9,
      descricao: 'Carro de Max Verstappen em 2023, que venceu 21 das 22 corridas da temporada, o maior número de vitórias de um carro em um único ano.',
      cor: '#374151',
      imagem: 'imagens/redbullrb19.png',

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
