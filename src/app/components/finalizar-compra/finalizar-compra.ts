import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-finalizar-compra',
  imports: [RouterLink],
  templateUrl: './finalizar-compra.html',
  styleUrl: './finalizar-compra.css',
})
export class FinalizarCompra {

  router = inject(Router);
  clientesService = inject(ClientesService);
  carrinhoService = inject(CarrinhoService);
  clienteLogado: boolean = false;

  ngOnInit(): void {

  const tipoUsuario = sessionStorage.getItem('tipoUsuario');

  if (tipoUsuario === 'cliente') {
    this.clienteLogado = true;
  }
}

  irParaLogin() {
    sessionStorage.setItem('finalizandoCompra', 'true');
    this.router.navigate(['/login']);
  }

  irParaCadastro() {
    sessionStorage.setItem('finalizandoCompra', 'true');
    this.router.navigate(['/clientes']);
  }

  confirmarCompra() {
    const email = sessionStorage.getItem('emailUsuario')
    const totalCompra = this.carrinhoService.total()

    this.clientesService.listar().subscribe(clientes => {
      const cliente = clientes.find(c => c.email === email)
      if (!cliente) return

      // gambiarra pois o json-server não salva campos que não existem no objeto
      cliente.valorGasto = (cliente.valorGasto ?? 0) + totalCompra

      this.clientesService.alterar(cliente).subscribe(() => {
        alert('Compra realizada com sucesso!')
        this.carrinhoService.limpar()
        this.router.navigate(['/leclerc'])
      })
    })
  }
}
