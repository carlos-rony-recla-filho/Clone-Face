import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormLoginComponent } from './_componets/form-login/form-login.component';
import { FooterComponent } from './_componets/footer/footer.component';
import { FormCadastroComponent } from './_componets/form-cadastro/form-cadastro.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { NavEsqueceuSenhaComponent } from './_componets/nav-esqueceu-senha/nav-esqueceu-senha.component';
import { FormEsqueceuSenhaComponent } from './_componets/form-esqueceu-senha/form-esqueceu-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    FormLoginComponent,
    FooterComponent,
    FormCadastroComponent,
    EsqueceuSenhaComponent,
    NavEsqueceuSenhaComponent,
    FormEsqueceuSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
