import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CarrinhoService } from '../../services/carrinho';

@Component({
  selector: 'app-carrinho',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {
  carrinhoService = inject(CarrinhoService);
}