import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministradoresService } from '../../services/administradores';
import { ClienteService } from '../../services/clientes';
import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  private router = inject(Router);
  private administradoresService = inject(AdministradoresService);
  private clienteService = inject(ClienteService);
  private carrinhoService = inject(CarrinhoService);

  login: string = '';
  senha: string = '';

  botaoDesabilitado(): boolean {
    return this.login === '' || this.senha === '';
  }

  fazerLogin() {

    this.administradoresService.listar().subscribe({
      next: (administradores) => {

        const admin = administradores.find(
          a => a.email === this.login && a.senha === this.senha
        );

        if (admin) {
          this.entrar('admin');
          this.router.navigate(['/admin-produtos-listar']);
        } else {
          this.procurarCliente();
        }

      },
      error: () => alert('Erro ao consultar a API.')
    });

  }

  procurarCliente() {

    this.clienteService.listar().subscribe({
      next: (clientes) => {

        const cliente = clientes.find(
          c => c.email === this.login && c.senha === this.senha
        );

        if (cliente) {
          this.entrar('cliente');

          if (this.carrinhoService.quantidade() > 0) {
            this.router.navigate(['/finalizar-compra']);
          } else {
            this.router.navigate(['/']);
          }

        } else {
          alert('Dados inválidos');
        }

      },
      error: () => alert('Erro ao consultar a API.')
    });

  }

  entrar(tipo: string) {
    sessionStorage.setItem('tipoUsuario', tipo);
    sessionStorage.setItem('emailUsuario', this.login);
    alert(`Bem-vindo ${this.login}!`);
  }

}
