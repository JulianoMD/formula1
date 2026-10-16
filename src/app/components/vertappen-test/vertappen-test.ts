import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vertappen-test',
  imports: [],
  templateUrl: './vertappen-test.html',
  styleUrl: './vertappen-test.css',
})
export class VertappenTest implements OnInit {

  router = inject(Router);

  ngOnInit(): void {

    const emailUsuario = sessionStorage.getItem('emailUsuario');

    if (emailUsuario !== 'maxverstappen@redbull.com') {
      alert('Página teste - Max Verstappen.');
      this.router.navigate(['/']);
    }
  }
}
