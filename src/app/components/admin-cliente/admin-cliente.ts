
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
    this.listaClientes = this.service.listar();
  }

}
