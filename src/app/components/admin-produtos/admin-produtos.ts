
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-admin-produtos',
  imports: [RouterLink],
  templateUrl: './admin-produtos.html',
  styleUrl: './admin-produtos.css',
})
export class AdminProdutos implements OnInit {

  private service = inject(ProdutosService);

  listaProdutos: Produto[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (produtos) => {
        this.listaProdutos = produtos;
      }
    });
  }

  excluir(id: string) {

    if (confirm('Deseja realmente excluir o produto?')) {

      this.service.excluir(id).subscribe({
        next: () => {
          this.listaProdutos = this.listaProdutos.filter(
            produto => produto.id !== id
          );
        }
      });

    }

  }

}

