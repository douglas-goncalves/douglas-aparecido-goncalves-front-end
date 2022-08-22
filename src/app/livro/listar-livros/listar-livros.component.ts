import { LivroModel } from '../../models/livro-model';
import { LivroServiceService } from '../../services/livro-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {

  constructor(private livroService: LivroServiceService, private router: Router,) { }

  livros: LivroModel[] = [];
  erroListaLivro: string = '';
  erroRemoveLivro: string = '';
  successoRemoveLivro: string = ''

  ngOnInit() {
    this.buscaTodos();
  }

  buscaTodos() {
    this.livroService.listaTodos().subscribe(successData => {
      this.livros = successData;
    }, error => {
      this.erroListaLivro = 'Ocorreu um erro ao buscar os livros'
    });
  }

  altera(livro: LivroModel) {
    this.router.navigate(['alterar-livro']);
  }

  removePeloId(livro: LivroModel) {
    this.erroRemoveLivro = '';
    this.successoRemoveLivro = '';
    let text = "Deseja excluir o livro: " + livro.titulo;
    if (confirm(text) == true) {
      console.log("excluir", livro.id);

      this.livroService.removeLivro(livro.id).subscribe(success => {
        this.successoRemoveLivro = "Livro " + livro.titulo + " removido com sucesso"

        this.buscaTodos();
      },
        error => {
          this.erroRemoveLivro = "Ocorreu um erro ao excluir o Livro " + livro.titulo;
        });
    } else {
      return;
    }
  }

  buscaPorId(livroId: number) {
    this.livroService.buscaporId(livroId).subscribe(result => {
      console.log(result);
    })
  }
}
