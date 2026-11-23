import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes';
import { Cliente } from '../../model/cliente';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit {

  clientesService = inject(ClientesService);

  nome: string = '';
  email: string = '';
  senha: string = '';

  clienteLogado: Cliente | undefined = undefined;

  ngOnInit(): void {

    const emailUsuario = sessionStorage.getItem('emailUsuario');

    if (emailUsuario) {

      this.clientesService.listar().subscribe(clientes => {
        this.clienteLogado = clientes.find(
          cliente => cliente.email === emailUsuario
        );
      });

    }
  }

  cadastrarCliente() {

    if (this.nome.trim() === '' || this.email.trim() === '' || this.senha.trim() === '') {
      alert('Preencha todos os campos.');
      return;
    }

    this.clientesService.listar().subscribe(clientes => {

      const emailJaExiste = clientes.find(
        cliente => cliente.email === this.email
      );

      if (emailJaExiste) {
        alert('Este e-mail já está cadastrado! Faça login.');
        return;
      }

      const cliente: Cliente = {
        id: '',
        nome: this.nome,
        email: this.email,
        senha: this.senha
      };

      this.clientesService.adicionar(cliente).subscribe(clienteSalvo => {

        alert('Cliente cadastrado com sucesso!');

        this.clienteLogado = clienteSalvo;

        sessionStorage.setItem('tipoUsuario', 'cliente');
        sessionStorage.setItem('emailUsuario', clienteSalvo.email);

        this.nome = '';
        this.email = '';
        this.senha = '';
      });

    });
  }
}
