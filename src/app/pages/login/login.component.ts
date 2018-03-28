import { Component, OnInit } from '@angular/core';
import { Login } from './login';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    login: Login
    constructor() { 
        debugger;
        this.login = new Login();
    }

    ngOnInit() {
    }

}
