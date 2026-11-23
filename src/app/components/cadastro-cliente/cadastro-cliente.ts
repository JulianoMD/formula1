
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../services/clientes';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule],
  templateUrl: './cadastro-cliente.html',
  styleUrl: './cadastro-cliente.css'
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = {} as Cliente;

  private service = inject(ClienteService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  confirmarSenha: string = '';

  clienteId: string | null =
    this.route.snapshot.paramMap.get('id');

  titulo = this.clienteId ? 'Editar Cliente' : 'Cadastro de Cliente';
  descricao = this.clienteId ? 'Atualize os dados do cliente.' : 'Preencha os dados abaixo para criar seu cadastro.';
  textoBotao = this.clienteId ? 'Salvar Alterações' : 'Cadastrar';

  ngOnInit() {

    if (this.clienteId) {

      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado.')
      });

    }

  }

  cadastrar() {

    if (!this.clienteId &&
        this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) {

      this.service.alterar(this.cliente).subscribe({
        next: () => {
          alert('Cliente alterado com sucesso!');
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => alert('Erro ao alterar cliente.')
      });

    } else {

      this.service.cadastrar(this.cliente).subscribe({
        next: () => {
          alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
          this.router.navigate(['/login']);
        },
        error: () => alert('Erro ao cadastrar cliente.')
      });

    }

  }

}

