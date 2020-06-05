import { ChatService } from './../../providers/chat.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _cs: ChatService) { }

  ngOnInit(): void {
  }

  ingresar(tipo: string){
    this._cs.login();
  }

}
