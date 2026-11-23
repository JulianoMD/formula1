import { Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  private produtosService = inject(ProdutosService);

  listaProdutos: Produto[] = [];

  ngOnInit(): void {
    this.produtosService.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      }
    });
  }

}
