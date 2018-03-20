import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';


const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  }
];

export const usuariosRouting = RouterModule.forChild(routes);