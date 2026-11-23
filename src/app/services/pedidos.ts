import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../model/pedido';

@Injectable({ providedIn: 'root' })
export class PedidosService {

  http = inject(HttpClient);

  url = 'http://localhost:3000/pedidos';

  salvar(pedido: Pedido) {
    return this.http.post<Pedido>(this.url, pedido);
  }

}
