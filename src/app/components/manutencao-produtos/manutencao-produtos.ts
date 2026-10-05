import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos';
import { Produto } from '../../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-produtos',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './manutencao-produtos.html',
  styleUrl: './manutencao-produtos.css',
})
export class ManutencaoProdutos implements OnInit {

  produtosService = inject(ProdutosService);

  router = inject(Router);

  produtos: Produto[] = [];

  nome: string = '';
  categoria: string = '';
  descricao: string = '';
  preco: number = 0;
  cor: string = '';

  produtoEditando: Produto | null = null;

  ngOnInit(): void {

  const tipoUsuario = sessionStorage.getItem('tipoUsuario');

  if (tipoUsuario !== 'admin') {
    alert('Acesso permitido somente ao administrador.');
    this.router.navigate(['/']);
    return;
  }

  this.produtos = this.produtosService.listar();
}

cadastrarProduto() {

  if (this.nome.trim() === '' || this.preco <= 0) {
    alert('Preencha o nome e um preço maior que zero.');
    return;
  }

  if (this.produtoEditando) {

    const produtoAlterado: Produto = {
      id: this.produtoEditando.id,
      nome: this.nome,
      categoria: this.categoria,
      descricao: this.descricao,
      preco: this.preco,
      cor: this.cor
    };

    this.produtosService.alterar(produtoAlterado);

    alert('Produto alterado com sucesso!');

    this.produtoEditando = null;

  } else {

    let maiorId = 0;
    for (const p of this.produtos) {
      if (p.id > maiorId) {
        maiorId = p.id;
      }
    }

    const produto: Produto = {
      id: maiorId + 1,
      nome: this.nome,
      categoria: this.categoria,
      descricao: this.descricao,
      preco: this.preco,
      cor: this.cor
    };

    this.produtosService.adicionar(produto);

    alert('Produto cadastrado com sucesso!');

  }

}
  editarProduto(produto: Produto) {

    this.produtoEditando = produto;

    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.descricao = produto.descricao;
    this.preco = produto.preco;
    this.cor = produto.cor;

  }

  excluirProduto(produto: Produto) {

  this.produtosService.excluir(produto.id);

  alert('Produto excluído com sucesso!');

}

}
