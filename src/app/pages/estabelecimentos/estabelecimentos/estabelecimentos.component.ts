import { Component, OnInit } from '@angular/core';
import { SmartTableService } from '../../../@core/data/smart-table.service';

@Component({
    selector: 'estabelecimentos',
    templateUrl: './estabelecimentos.component.html',
    styleUrls: ['./estabelecimentos.component.scss']
})
export class EstabelecimentosComponent implements OnInit {



    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        mode: 'external',
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: true,
        },
        columns: {
            NomeFantasia: {
                title: 'Nome fantasia',
                type: 'string',
            },
            Telefone: {
                title: 'Telefone',
                type: 'string',
            },
        },
    };
    source: Array<any>;
    constructor() {

        this.source = [{
            NomeFantasia: "Lojas Quero-Quero",
            Telefone: "(51) 98123-1233"
        },
        {
            NomeFantasia: "Taqui",
            Telefone: "(51) 97121-4231"
        },
        {
            NomeFantasia: "Casas Bahia",
            Telefone: "(47) 91133-1533"
        },
        {
            NomeFantasia: "Lojas americanas",
            Telefone: "(11) 98123-1233"
        }];

    }

    ngOnInit() {
    }

}
