import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../../services/produtos';
import { Produto } from '../../model/produto';

@Component({
    selector: 'app-manutencao-produtos',
      imports: [FormsModule],
        templateUrl: './produtos_cadastrar_editar.html',
          styleUrl: './produtos_cadastrar_editar.css',
          })
        export class ManutencaoProdutos implements OnInit {

          produto: Produto = {} as Produto;

            private service = inject(ProdutosService);
              private router = inject(Router);
                private route = inject(ActivatedRoute);

                  produtoId: string | null =
                      this.route.snapshot.paramMap.get('id');

                        ngOnInit() {

                            if (this.produtoId) {
                                  this.service.buscarPorId(this.produtoId).subscribe({
                                          next: (produto) => this.produto = produto,
                                                  error: () => alert('Produto não encontrado.')
                                                        });
                                                            }

                                                              }

                                                                salvar() {

                                                                    if (this.produtoId) {

                                                                          this.service.alterar(this.produto).subscribe({
                                                                                  next: () => {
                                                                                            alert('Produto alterado com sucesso!');
                                                                                                      this.router.navigate(['/admin-produtos-listar']);
                                                                                                              },
                                                                                                                      error: () => alert('Erro ao alterar o produto.')
                                                                                                                            });

                                                                                                                                } else {

                                                                                                                                      this.service.adicionar(this.produto).subscribe({
                                                                                                                                              next: () => {
                                                                                                                                                        alert('Produto cadastrado com sucesso!');
                                                                                                                                                                  this.router.navigate(['/admin-produtos-listar']);
                                                                                                                                                                          },
                                                                                                                                                                                  error: () => alert('Erro ao cadastrar o produto.')
                                                                                                                                                                                        });

                                                                                                                                                                                            }

                                                                                                                                                                                              }

                                                                                                                                                                                              }