import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentoComponent } from './editar-estabelecimento/estabelecimento.component';
import { EstabelecimentosComponent } from './estabelecimentos/estabelecimentos.component';
import { estabelecimentosRouting } from './estabelecimentos.routing';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        estabelecimentosRouting,
        ThemeModule,
        Ng2SmartTableModule
    ],
    declarations: [EstabelecimentoComponent, EstabelecimentosComponent]
})
export class EstabelecimentosModule { }
