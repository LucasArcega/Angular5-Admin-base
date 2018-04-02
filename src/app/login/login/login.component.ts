import { Component, OnInit } from '@angular/core';
import { NbSpinnerService,NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';
import { AuthService } from '../../services/auth.service';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


	style: any;
	login: any;
	showMessages: any;
	errors: any;
	messages: any;
	submitted: boolean;
	auth:AuthService;
	constructor(auth:AuthService) {

		this.auth = auth;
		this.style = {
			loginPage: {
				"height": "100vh",
				"background-image": "linear-gradient(to left, #0095ff, #b4e0ff, #0095ff)"
			},
			loginBox:{
				"background-color":"rgba(255,255,255,0.85)"
			}
		}
		this.showMessages = false;
		this.errors = [];
		this.messages = [];
		this.login = {};
		this.submitted = false;
	}

	ngOnInit() {
		NbSpinnerService.prototype.clear();
	}

	logar () {
		this.auth.login(this.login);
	}

}
