import { AngularFireAuth } from "@angular/fire/auth";
import { Mensaje } from "./../inteface/mensaje";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import * as firebase from "firebase/app";
import "firebase/auth";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Mensaje[] = [];
  usuario: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user) => {
      console.log(user);
      if (!user) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    });
  }

  login() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  cargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>("chats", (ref) =>
      ref.orderBy("fecha", "desc").limit(5)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((msjs: Mensaje[]) => {
        this.chats = [];
        for (let mensaje of msjs) {
          this.chats.unshift(mensaje);
        }
        return this.chats;
      })
    );
  }

  agregarMensaje(texto: string) {
    let mensaje: Mensaje = {
      nombre: "Miguel",
      mensaje: texto,
      fecha: new Date().getTime(),
    };

    return this.itemsCollection.add(mensaje);
  }
}
