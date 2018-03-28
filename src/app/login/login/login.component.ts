import { Component, OnInit } from '@angular/core';
import { NbSpinnerService } from '@nebular/theme';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    login:any;
    showMessages:any;
    errors:any;
    messages:any;
    submitted:boolean;
    constructor() {

        this.showMessages = false;
        this.errors=[];
        this.messages = [];
        this.login ={};
        this.submitted = false;
     }

    ngOnInit() {
        NbSpinnerService.prototype.clear();
    }

    logar(){

    }

}
