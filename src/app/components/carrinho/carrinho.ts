import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarrinhoService } from '../../services/carrinho';

// @Component define as configurações da página do carrinho
@Component({
  selector: 'app-carrinho',        // Nome da tag HTML deste componente (<app-carrinho>)
  standalone: true,               
  imports: [RouterLink],           // Habilita o uso de routerLink no arquivo carrinho.html
  templateUrl: './carrinho.html', 
  styleUrl: './carrinho.css'     
})
export class Carrinho {

  // Injeta o CarrinhoService para o HTML conseguir ler os itens e chamar adicionar, diminuir, remover e total
  carrinhoService = inject(CarrinhoService);

}
