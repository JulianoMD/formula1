import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';
import { LoginComponent } from './components/login/login';
import { ClienteComponent } from './components/cadastro-cliente/cadastro-cliente';
import { AdminClientes } from './components/admin-cliente/admin-cliente';
import { FinalizarCompra } from './components/finalizar-compra/finalizar-compra';
import { ManutencaoProdutos } from './components/manutencao-produtos/manutencao-produtos';
import { VertappenTest } from './components/vertappen-test/vertappen-test';
import { AdminProdutos } from './components/admin-produtos/admin-produtos';

function somenteAdmin() {
  if (sessionStorage.getItem('tipoUsuario') === 'admin') {
    return true;
  }
  alert('Acesso permitido apenas para administradores.');
  return inject(Router).parseUrl('/login');
}

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
  {
    path: 'cadastro-cliente/:id',
    component: ClienteComponent,
    canActivate: [somenteAdmin],
  },
  {
    path: 'admin-clientes-listar',
    component: AdminClientes,
    canActivate: [somenteAdmin],
  },
  {
    path: 'finalizar-compra',
    component: FinalizarCompra,
  },
  {
    path: 'manutencao-produtos',
    component: ManutencaoProdutos,
    canActivate: [somenteAdmin],
  },
  {
    path: 'manutencao-produtos/:id',
    component: ManutencaoProdutos,
    canActivate: [somenteAdmin],
  },
  {
    path: 'admin-produtos-listar',
    component: AdminProdutos,
    canActivate: [somenteAdmin],
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
