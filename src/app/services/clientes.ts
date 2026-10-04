import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: any[] = [
    {
      nome: 'Cliente Teste',
      email: 'teste@email.com',
      senha: '123'
    }
  ];

}
