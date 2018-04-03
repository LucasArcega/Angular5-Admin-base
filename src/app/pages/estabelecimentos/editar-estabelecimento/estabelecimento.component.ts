import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from '../estabelecimento';

@Component({
  selector: 'estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.scss']
})
export class EstabelecimentoComponent implements OnInit {

  estabelecimento: Estabelecimento;
  constructor() {
    this.estabelecimento = new Estabelecimento();
  }

  ngOnInit() {
  }

}
