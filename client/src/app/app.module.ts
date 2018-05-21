import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AngularFireModule } from 'angularfire2';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export const firebaseConfig = {
  apiKey: "AIzaSyCXFCwWh9gveEEk93h-DrQOmetX70HKXE8",
  authDomain: "shootblinks.firebaseapp.com",
  databaseURL: "https://shootblinks.firebaseio.com",
  projectId: "shootblinks",
  storageBucket: "shootblinks.appspot.com",
  messagingSenderId: "578051573404"
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    LandingpageComponent,
    CarouselComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes,
    HttpClientModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
