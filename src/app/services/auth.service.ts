import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {

  apiUrl: string;
  http: HttpClient;
  constructor() {
    this.apiUrl = environment.apiUrl;
  }


  login(login: string, senha: string, ) {
    this.http.post(this.apiUrl, { login, senha }).subscribe(data => {
      console.log(data);
    });

  }

}
