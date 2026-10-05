import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClientesService } from '../../services/clientes';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  router = inject(Router);
  clientesService = inject(ClientesService);

  email: string = '';
  senha: string = '';
  tipoUsuario: string = '';

  botaoDesabilitado: boolean = true;

  validarFormulario() {

    if (this.email.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }

  }

fazerLogin() {

  if (this.email === 'admin@email.com' && this.senha === '123') {

    this.tipoUsuario = 'admin';

    sessionStorage.setItem('tipoUsuario', 'admin');

    alert('Bem-vindo, administrador!');

    this.router.navigate(['/']);

  } else {

    const cliente = this.clientesService.clientes.find(
      cliente =>
        cliente.email === this.email &&
        cliente.senha === this.senha
    );

    if (cliente) {

      this.tipoUsuario = 'cliente';

      sessionStorage.setItem('tipoUsuario', 'cliente');
      sessionStorage.setItem('emailUsuario', cliente.email);

      alert(`Bem-vindo, ${cliente.nome}!`);

      const finalizandoCompra = sessionStorage.getItem('finalizandoCompra');

      if (finalizandoCompra === 'true') {

        sessionStorage.removeItem('finalizandoCompra');

        this.router.navigate(['/finalizar-compra']);

      } else {

        this.router.navigate(['/']);

      }

    } else {

      alert('E-mail ou senha inválidos');

    }

  }

}
}

