import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteService } from '../../services/clientes';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-admin-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-cliente.html',
  styleUrl: './admin-cliente.css'
})
export class AdminClientes implements OnInit {

  private service = inject(ClienteService);

  listaClientes: Cliente[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe({
      next: (clientes) => {
        this.listaClientes = clientes;
        error: () => alert('Erro ao consultar clientes.')
      }
    });
  }

  excluir(id: string | undefined): void {
    if (id !== undefined && confirm('Deseja realmente excluir o cliente?')) {
      this.service.excluir(id).subscribe({
        next: () => {
          this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
        },
        error: () => alert('Erro ao excluir o cliente.')
      });
    }
  }

}