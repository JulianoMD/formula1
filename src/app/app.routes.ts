import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';
import { Login } from './components/login/login';
import { Clientes } from './components/clientes/clientes';
import { FinalizarCompra } from './components/finalizar-compra/finalizar-compra';
import { ManutencaoProdutos } from './components/manutencao-produtos/manutencao-produtos';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'produtos',
    component: Produtos,
  },
  {
    path: 'carrinho',
    component: Carrinho,
  },
    {
    path: 'login',
    component: Login,
  },
  {
    path: 'clientes',
    component: Clientes,
  },
  {
  path: 'finalizar-compra',
  component: FinalizarCompra,
  },
  {
  path: 'manutencao-produtos',
  component: ManutencaoProdutos,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
