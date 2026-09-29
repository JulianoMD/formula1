import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';

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
    path: '**',
    redirectTo: '',
  },
];
