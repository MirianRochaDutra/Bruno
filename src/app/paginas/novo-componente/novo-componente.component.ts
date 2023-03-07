import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.scss']
})
export class NovoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  var numero: number = 42;
  let palavra: string = "mensagem";
  const pi: number = 3.14;

  console.log("Numero:" + numero);
  console.log("Palavra"+ palavra);
  console.log("PI:" + pi);
  }

}
