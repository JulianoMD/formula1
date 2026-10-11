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

    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtosService.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
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
        cor: this.cor,
        imagem: this.produtoEditando.imagem
      };

      this.produtosService.alterar(produtoAlterado).subscribe(() => {
        alert('Produto alterado com sucesso!');
        this.produtoEditando = null;
        this.limparFormulario();
        this.carregarProdutos();
      });

    } else {

      const produto: Produto = {
        id: '',
        nome: this.nome,
        categoria: this.categoria,
        descricao: this.descricao,
        preco: this.preco,
        cor: this.cor
      };

      this.produtosService.adicionar(produto).subscribe(() => {
        alert('Produto cadastrado com sucesso!');
        this.limparFormulario();
        this.carregarProdutos();
      });

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

    this.produtosService.excluir(produto.id).subscribe(() => {
      alert('Produto excluído com sucesso!');
      this.carregarProdutos();
    });

  }

  limparFormulario() {
    this.nome = '';
    this.categoria = '';
    this.descricao = '';
    this.preco = 0;
    this.cor = '';
  }

}
