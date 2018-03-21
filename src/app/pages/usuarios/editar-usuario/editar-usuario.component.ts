import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { NgModel } from '@angular/forms';

@Component({
	selector: 'editar-usuario',
	templateUrl: './editar-usuario.component.html',
	styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

    usuario: Usuario
    tipoUsuario: Array<string>
	constructor() {
        this.tipoUsuario = ["cliente","administrador"];
        this.usuario = new Usuario();
		// this.usuario = {
		// 	Id: 2,
		// 	Nome: "Ruan Santos",
		// 	Telefone: "(51) 98123-1233",
		// 	Email: "RuanSantos@gmail.com",
		// 	Ativo: true,
		// 	TipoUsuario: "cliente"
		// } as Usuario;

	}

	ngOnInit() {
	}

}
