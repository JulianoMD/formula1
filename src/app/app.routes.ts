import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Produtos } from './components/produtos/produtos';
import { Carrinho } from './components/carrinho/carrinho';
import { LoginComponent } from './components/login/login';
import { ClienteComponent } from './components/cadastro-cliente/cadastro-cliente';
import { AdminClientes } from './components/admin-cliente/admin-cliente';
import { FinalizarCompra } from './components/finalizar-compra/finalizar-compra';
import { ManutencaoProdutos } from './components/produtos_cadastrar_editar/produtos_cadastrar_editar';
import { AdminProdutos } from './components/produtos_listar_excluir/produtos_listar_excluir';

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
                                                                        },

                                                                          {
                                                                              path: 'admin-clientes-listar',
                                                                                  component: AdminClientes,
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
                                                                                                                  path: 'manutencao-produtos/:id',
                                                                                                                      component: ManutencaoProdutos,
                                                                                                                        },

                                                                                                                          {
                                                                                                                              path: 'admin-produtos-listar',
                                                                                                                                  component: AdminProdutos,
                                                                                                                                    },

                                                                                                                                                ];