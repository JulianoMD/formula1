import { ItemCarrinho } from './item-carrinho';

export interface Pedido {
  id?: string;
  emailCliente: string;
  itens: ItemCarrinho[];
  total: number;
  data: string;
}
