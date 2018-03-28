import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '../forms/forms.module';
import { LoginComponent } from './login.component';
import { loginRouting } from './login.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemeModule,
        loginRouting
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }
