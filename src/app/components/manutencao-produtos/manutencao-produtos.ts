import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from '../../services/produtos';
import { Produto } from '../../model/produto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manutencao-produtos',
  imports: [FormsModule],
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

    const produto: Produto = {
      id: this.produtos.length + 1,
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