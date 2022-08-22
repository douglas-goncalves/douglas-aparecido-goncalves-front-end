import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarLivrosComponent } from './livro/listar-livros/listar-livros.component';
import { ListarAutoresComponent } from './autor/listar-autores/listar-autores.component';
import { FormularioLivroComponent } from './livro/formulario-livro/formulario-livro.component';
import { FormularioAutorComponent } from './autor/formulario-autor/formulario-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterarAutorComponent } from './autor/alterar-autor/alterar-autor.component';
import { AlterarLivroComponent } from './livro/alterar-livro/alterar-livro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    ListarAutoresComponent,
    FormularioLivroComponent,
    FormularioAutorComponent,
    AlterarAutorComponent,
    AlterarLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
