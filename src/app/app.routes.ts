import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';
import { Login } from './components/login/login';
import { Clientes } from './components/clientes/clientes';
import { FinalizarCompra } from './components/finalizar-compra/finalizar-compra';
import { ManutencaoProdutos } from './components/manutencao-produtos/manutencao-produtos';
import { ManutencaoClientes } from './components/manutencao-clientes/manutencao-clientes';
import { VertappenTest } from './components/vertappen-test/vertappen-test';
import { Leclerc } from './components/leclerc/leclerc';


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
  { path: 'manutencao-clientes',
    component: ManutencaoClientes },
  {
    path: 'verstappen',
    component: VertappenTest,
  },
  {
    path: 'leclerc',
    component: Leclerc,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
