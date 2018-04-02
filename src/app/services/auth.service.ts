import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';

import 'style-loader!angular2-toaster/toaster.css';


@Injectable()
export class AuthService {

	apiUrl: string;
	
	constructor(private router: Router, private http: HttpClient) {
		this.apiUrl = environment.apiUrl;
	}

	private showToast(type: string, title: string, body: string) {

		var toast :Toast= {
		  type: type,
		  title: title,
		  body: body,
		  timeout: 2000,
		  showCloseButton: true
		};
		// this.toasterService.pop(toast);
	  }
	

	login(login: any) {
		this.http.post(this.apiUrl + "/login", login).subscribe(data => {
			if(data['retorno'].authenticated){
				this.setSession(data['retorno']);
				this.router.navigate(['pages','usuarios']);
			}else{
				this.showToast("erro", "Falha", data['mensagem']);
			}
		});

	}
	logout() {
		localStorage.removeItem("token");
		localStorage.removeItem("expiration");
		this.router.navigate(['login']);
	}

	public isLoggedIn() {
		return moment().isBefore(this.getExpiration());
	}

	isLoggedOut() {
		return !this.isLoggedIn();
	}

	getExpiration() {
		const expiration = localStorage.getItem("expiration");
		const expiresAt = JSON.parse(expiration);
		return moment(expiresAt);
	}

	private setSession(authResult) {
        const expiresAt = moment().add(authResult.Expiration,'second');
        localStorage.setItem('token', authResult.Token);
        localStorage.setItem("expiration", JSON.stringify(expiresAt.valueOf()) );
    }          
}


