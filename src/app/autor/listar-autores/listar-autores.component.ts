import { EventEmitterServiceService } from './../../services/event-emitter-service.service';
import { AlterarAutorComponent } from '../alterar-autor/alterar-autor.component';
import { AutorServiceService } from '../../services/autor-service.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutorModel } from '../../models/autor-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {
  //@Output() aoclickarEmAlterarAutor: any = new EventEmitter<number>();
  //@Output() aoBuscaPorId: any = new EventEmitter<any>();

  autorId: any;

  autores: AutorModel[] = [];
  erroListaAutor: string = '';
  erroRemoveAutor: string = '';
  successRemoveAutor: string = ''

  constructor(
    private autorService: AutorServiceService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.listaTodos();
    EventEmitterServiceService.get('aoAlterar').subscribe((item) => { this.autorId = item; })
  }

  listaTodos() {
    this.autorService.listaTodos().subscribe((sucessData) => {
      this.autores = sucessData;
    }, error => {
      this.erroListaAutor = 'Ocorreu um erro ao buscar os autores'
    });
  }

  buscaPorId(autorId: number) {
    //this.aoBuscaPorId.emit({autorId: autorId})
    this.autorService.buscaPorId(autorId).subscribe((result) => {
      console.log(result)
    });
  }

  listarLivrosAutor(autorId: number){
    this.autorService.listarLivrosDoAutor(autorId).subscribe((result) => {
      console.log(result)
    });
  }

  altera(autor: AutorModel) {
    //this.aoclickarEmAlterarAutor.emit(autor.id);
    EventEmitterServiceService.get('aoAlterar').emit(autor.id);
    this.router.navigate(['alterar-autor']);
  }

  abraSolicitacaoRemocao(autor: AutorModel) {
    this.erroRemoveAutor = '';
    this.successRemoveAutor = '';

    let text = "Deseja excluir o autor: " + autor.nome;
    if (confirm(text) == true) {
      console.log("excluir", autor.id);
      this.autorService.removeAutor(autor.id).subscribe((result) => {
        this.listaTodos();
      })
    }

  }

}
