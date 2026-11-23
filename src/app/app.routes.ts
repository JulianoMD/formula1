import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';
import { LoginComponent } from './components/login/login';
import { ClienteComponent } from './components/cadastro-cliente/cadastro-cliente';
import { AdminClientes } from './components/admin-cliente/admin-cliente';
import { FinalizarCompra } from './components/finalizar-compra/finalizar-compra';
import { ManutencaoProdutos } from './components/manutencao-produtos/manutencao-produtos';
import { VertappenTest } from './components/vertappen-test/vertappen-test';

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
    component: LoginComponent,
  },
  {
    path: 'cadastro-cliente',
    component: ClienteComponent,
  },
  { path: 'admin-clientes-listar', 
    component: AdminClientes },
  {
    path: 'finalizar-compra',
    component: FinalizarCompra,
  },
  {
    path: 'manutencao-produtos',
    component: ManutencaoProdutos,
  },

  {
    path: 'verstappen',
    component: VertappenTest,
  },
  {
    path: '**',
    redirectTo: '',
  },
];