import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterializeService } from './core/services/materialize.service';

//firebase
import { environment as ENV } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './core/services/firebase.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ChatViewerComponent } from './core/components/chat-viewer/chat-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ChatViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(ENV.firebase)
  ],
  providers: [MaterializeService,
    FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
