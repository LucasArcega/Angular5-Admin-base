import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';
import { usuariosRouting } from './usuarios.routing';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    usuariosRouting,
    Ng2SmartTableModule,
    ThemeModule
  ],
  declarations: [
    UsuariosComponent,
    EditarUsuarioComponent
  ]
})
export class UsuariosModule {}