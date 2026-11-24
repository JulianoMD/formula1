
import { Component, inject, OnInit } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

import { CarrinhoService } from '../../services/carrinho';
import { ClienteService } from '../../services/clientes';

@Component({
  selector: 'app-finalizar-compra', 
  standalone: true,                       
  imports: [RouterLink],                   
  templateUrl: './finalizar-compra.html',  
  styleUrl: './finalizar-compra.css',    
})
export class FinalizarCompra implements OnInit {

  //Injeta os serviços necessários usando inject() 
  router = inject(Router);
  carrinhoService = inject(CarrinhoService);
  clienteService = inject(ClienteService);

  //booleana que guarda se o cliente está logado (começa falsa)
  clienteLogado: boolean = false;

  // ngOnInit roda automaticamente uma vez assim que a tela é carregada
  ngOnInit(): void {

    // Verifica no ClienteService se o usuário logado é um cliente
    if (this.clienteService.tipoUsuario === 'cliente') {
      this.clienteLogado = true;
    }

  }

  // Redireciona para a rota de login sem recarregar a página
  irParaLogin() {
    this.router.navigate(['/login']);
  }

  // Redireciona para a rota de cadastro de cliente
  irParaCadastro() {
    this.router.navigate(['/cadastro-cliente']);
  }

  // Finaliza o pedido, exibe alerta, limpa o carrinho e volta para a página inicial
  confirmarCompra() {

    if (this.clienteLogado) {

      alert('Compra realizada com sucesso!');

      this.carrinhoService.limpar();

      this.router.navigate(['/']);

    }

  }

}

