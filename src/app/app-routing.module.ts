import { AlterarLivroComponent } from './livro/alterar-livro/alterar-livro.component';
import { FormularioAutorComponent } from './autor/formulario-autor/formulario-autor.component';
import { FormularioLivroComponent } from './livro/formulario-livro/formulario-livro.component';
import { ListarAutoresComponent } from './autor/listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './livro/listar-livros/listar-livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarAutorComponent } from './autor/alterar-autor/alterar-autor.component';


//Aqui
const routes: Routes = [
  {
   path: "",
   pathMatch: 'full',
   redirectTo: 'livros'
  },
  {path:"livros", component:ListarLivrosComponent},
  {path:"autores", component:ListarAutoresComponent},
  {path:"formulario-livro", component:FormularioLivroComponent},
  {path:"formulario-autor", component:FormularioAutorComponent},
  {path:"alterar-autor", component:AlterarAutorComponent},
  {path:"alterar-livro", component:AlterarLivroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
