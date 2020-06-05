import { AppRoutingModule } from "./app-routing.module";
import { ShareModule } from "./core/shared/share.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { ChatComponent } from "./components/chat/chat.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { LoginComponent } from "./components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChatComponent,
    LoginComponent,
  ],
  imports: [
    ShareModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
