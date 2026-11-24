import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../services/clientes';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule],
  templateUrl: './cadastro-cliente.html',
  styleUrl: './cadastro-cliente.css'
})
export class ClienteComponent implements OnInit {
  // Defino um objeto cliente vazio para armazenar os dados do formulário
  cliente: Cliente = {} as Cliente;
  private service = inject(ClienteService);
  private router = inject(Router);  // Variável apenas para validar senhas iguais
  private route = inject(ActivatedRoute);
  confirmarSenha: string = ''; // Injeta o ActivatedRoute para acessar os parâmetros da rota
  clienteId: string | null = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    // Se houver um ID na rota, significa que estamos editando um cliente existente
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado.')
      });
    }
  }

  salvar() {
    if (!this.cliente.cpf || !this.cliente.nome || !this.cliente.sobrenome ||
      !this.cliente.dataNascimento || !this.cliente.email || !this.cliente.senha) {
    alert('Preencha todos os campos do cliente.');
    return;
    }

    if (!this.clienteId && this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) {
      this.service.editar(this.cliente).subscribe({
        next: () => {
          alert('Cliente alterado com sucesso!');
          this.router.navigate(['/admin-clientes-listar']);
        },
          error: () => alert('Erro ao alterar o cliente.')
      });
    }else{
      this.service.incluir(this.cliente).subscribe({
        next: () => {
          alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
          this.router.navigate(['/login']);
        },
        error: () => alert('Erro ao cadastrar cliente.')
      });
    }
  }
}


