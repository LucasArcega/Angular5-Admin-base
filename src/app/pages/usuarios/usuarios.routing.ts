import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'detalhe/:id?',
    component: EditarUsuarioComponent
  }
];

export const usuariosRouting = RouterModule.forChild(routes);