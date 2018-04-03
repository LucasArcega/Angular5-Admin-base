import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { EstabelecimentoComponent } from './editar-estabelecimento/estabelecimento.component';


const routes: Routes = [
  {
    path: '',
    component: EstabelecimentosComponent
  },
  {
    path: 'detalhe/:id?',
    component: EstabelecimentoComponent
  }
];

export const estabelecimentosRouting = RouterModule.forChild(routes);