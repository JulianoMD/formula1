
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/clientes';

@Component({
  selector: 'app-cliente',
  imports: [FormsModule],
  templateUrl: './cadastro-cliente.html',
  styleUrl: './cadastro-cliente.css'
})
export class ClienteComponent {

  private service = inject(ClienteService);

  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar() {

    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    this.service.cadastrar(this.cliente);
    console.log(this.service.listar());

    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);

    console.log(this.cliente);

    this.cliente = {
      cpf: '',
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      email: '',
      senha: '',
      confirmarSenha: ''
    };
  }
}
