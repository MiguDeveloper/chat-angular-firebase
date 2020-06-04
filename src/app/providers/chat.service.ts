import { Mensaje } from "./../inteface/mensaje";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Mensaje[] = [];

  constructor(private afs: AngularFirestore) {}

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>("chats");
    return this.itemsCollection.valueChanges().pipe(
      map((msj: Mensaje[]) => {
        this.chats = msj;
      })
    );
  }

  agregarMensaje(texto: string){
    
    let mensaje: Mensaje = {
      nombre: 'Miguel',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add(mensaje);
  }
}
