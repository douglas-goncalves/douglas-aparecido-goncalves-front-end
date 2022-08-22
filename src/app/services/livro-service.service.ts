import { LivroAtualizacaoInput } from './../models/livro-atualizacao-input';
import { LivroCadastroInput } from './../models/livro-cadastro-input';
import { LivroModel } from '../models/livro-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const URL_API = environment.URL_API + "livros";

@Injectable({
  providedIn: 'root'
})
export class LivroServiceService {

  constructor(private httpClient: HttpClient) { }

  listaTodos(): Observable<LivroModel[]> {
    return this.httpClient.get<LivroModel[]>(URL_API);
  }

  removeLivro(livroId: number): Observable<any> {
    return this.httpClient.delete(`${URL_API}/${livroId}`);
  }

  buscaporId(livroId: number) {
    return this.httpClient.get(`${URL_API}/${livroId}`);
  }

  alteraLivro(livroId: number, livroAtualizacaoInput: LivroAtualizacaoInput, autoresIds: Array<number>): Observable<any> {
    livroAtualizacaoInput.autoresIds = autoresIds;
    return this.httpClient.put(`${URL_API}/${livroId}`, livroAtualizacaoInput);
  }

  criarLivro(livro: LivroCadastroInput, autores: Array<number>): Observable<any> {
    livro.autoresIds = autores;
    return this.httpClient.post(URL_API, livro);
  }

}
