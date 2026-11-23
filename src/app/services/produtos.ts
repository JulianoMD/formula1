import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {

  http = inject(HttpClient);

  url = 'http://localhost:3000/produtos';

  listar() {
    return this.http.get<Produto[]>(this.url);
  }

  adicionar(produto: Produto) {
    return this.http.post<Produto>(this.url, produto);
  }

  alterar(produto: Produto) {
    return this.http.put<Produto>(`${this.url}/${produto.id}`, produto);
  }

  excluir(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
