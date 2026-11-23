import { ClienteService } from '../../services/clientes';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ) {}

  botaoDesabilitado: boolean = true;
  login: string = "";
  senha: string = "";

  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  fazerLogin() {

    console.log(this.clienteService.listar());

    if (this.login === 'admin@email.com' && this.senha === '123') {

      this.clienteService.tipoUsuario = 'admin';

      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['/admin-clientes-listar']);

    } else {

      let encontrou = false;

      for (let cliente of this.clienteService.listar()) {

        if (cliente.email === this.login && cliente.senha === this.senha) {

          encontrou = true;
          this.clienteService.tipoUsuario = 'cliente';
          break;

        }
      }

      if (encontrou) {
        alert(`Bem-vindo ${this.login}!`);
        this.router.navigate(['/']);
      } else {
        alert('Dados inválidos');
      }

    }
  }

  onBotaoClicado() {
    alert("Botão clicado");
  }

  teclaDigitada() {
    alert("Usuário digitou uma tecla");
  }

}

