import { ChatService } from "./../../providers/chat.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"],
})
export class ChatComponent implements OnInit {
  mensaje: string = "";

  constructor(public _chatService: ChatService) {
    this._chatService.cargarMensajes().subscribe();
  }

  ngOnInit(): void {}

  fn_enviarMensaje() {
    if (this.mensaje.length === 0) {
      return;
    }

    this._chatService
      .agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.error("Error al enviar", err));
  }
}
