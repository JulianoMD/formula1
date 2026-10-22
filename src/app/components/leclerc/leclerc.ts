import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-leclerc',
  imports: [],
  templateUrl: './leclerc.html',
  styleUrl: './leclerc.css',
})
export class Leclerc {
  router = inject(Router);
  clienteService = inject(ClientesService);
  valorLiberacaoConteudo = 300;
  email = sessionStorage.getItem('emailUsuario')

  ngOnInit(): void {

    this.clienteService.listar().subscribe((clientes) => {
      const cliente = clientes.find((c) => c.email === this.email)
      if (cliente) {
        const gasto = cliente.valorGasto ?? 0
        if (gasto > 0) {
          if (gasto < this.valorLiberacaoConteudo) {
            alert(`Parabens pela compra,se quiser liberar o conteudo exclusivo, aproveite e leve mais um de nossos produtos e bata o valor de:
          ${(this.valorLiberacaoConteudo - gasto ).toFixed(2)}`)
            this.router.navigate(['/'])
            return
          }
          alert('Parabens pela compra, voce liberou o conteudo exclusivo do Leclerc');
          return
        }
      }
      this.router.navigate(['/'])
    })
  }
}
