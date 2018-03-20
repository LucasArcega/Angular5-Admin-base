import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';
import { usuariosRouting } from './usuarios.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    usuariosRouting
  ],
  declarations: [
    UsuariosComponent
  ]
})
export class UsuariosModule {}