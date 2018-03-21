import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table/lib/data-source/local/local.data-source';
import { SmartTableService } from '../../@core/data/smart-table.service';

@Component({
  selector: 'usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

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
    mode:'external',
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      Nome: {
        title: 'Nome',
        type: 'string',
      },
      Email: {
        title: 'Email',
        type: 'string',
      },
      Telefone: {
        title: 'Telefone',
        type: 'string',
      },      
    },
  };
  
  source: Array<any>;
  constructor(private service: SmartTableService) {
    
    this.source = [{
      Nome:"Ruan Santos",
      Email: "RuanSantos@gmail.com",
      Telefone: "(51) 98123-1233"
    },
    {
      Nome:"Adilson Menezes",
      Email: "Adilson@gmail.com",
      Telefone: "(51) 97121-4231"
    },
    {
      Nome:"Jonas Silva",
      Email: "Jonas@hotmail.com",
      Telefone: "(47) 91133-1533"
    },
    {
      Nome:"Luciano Oliveira",
      Email: "LucianoOliveira@outlook.com",
      Telefone: "(11) 98123-1233"
    }
  ]
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  }

}
