import { AutorAtualizacaoInput } from './../models/autor-atualizacao-input';
import { AutorCadastroInput } from './../models/autor-cadastro-input';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorModel } from '../models/autor-model';

const URL_API = environment.URL_API + "autores"

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  constructor(private httpClient: HttpClient) { }

  listaTodos(): Observable<AutorModel[]> {
    return this.httpClient.get<AutorModel[]>(URL_API);
  }

  removeAutor(autorId: number): Observable<any> {
    return this.httpClient.delete(`${URL_API}/${autorId}`);
  }

  buscaPorId(autorId: number): Observable<AutorModel> {
    let autor: Observable<AutorModel> = this.httpClient.get<any>(`${URL_API}/${autorId}`);
    return autor;
  }

  alteraAutor(autorId: number, autorAtualizacaoInput: AutorAtualizacaoInput) {
    return this.httpClient.put(`${URL_API}/${autorId}`, autorAtualizacaoInput);
  }

  criarAutor(autorCadastroInput: AutorCadastroInput): Observable<any> {
    return this.httpClient.post(URL_API, autorCadastroInput);
  }

  listarLivrosDoAutor(autorId: number) {
    return this.httpClient.get<any>(`${URL_API}/${autorId}/livros`)
  }
}
