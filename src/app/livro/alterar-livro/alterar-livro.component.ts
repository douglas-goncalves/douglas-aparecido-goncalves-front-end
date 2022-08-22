import { EventEmitterServiceService } from '../../services/event-emitter-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LivroServiceService } from '../../services/livro-service.service';
import { AutorModel } from 'src/app/models/autor-model';
import { AutorServiceService } from 'src/app/services/autor-service.service';

@Component({
  selector: 'app-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.css']
})
export class AlterarLivroComponent implements OnInit {
  livroId: any;

  alteraLivroForm: FormGroup
  livroAutoresIds: Array<number> = []
  autores: Array<AutorModel> = [];

  erroAlteraLivro: string = '';
  successAlteraLivro: string = ''

  constructor(
    private livroServiceService: LivroServiceService,
    private formBuilder: FormBuilder,
    private autorService: AutorServiceService

  ) {
    this.alteraLivroForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      anoLancamento: ['', [Validators.required]],
      autoresIds: [this.autores, [Validators.required]]
    })

  }

  ngOnInit(): void {
    this.autorService.listaTodos().subscribe((result) => {
      this.autores = result;
    }, error => {
      alert('Ocorreu um erro ao buscar os autores')
    });

    EventEmitterServiceService.get('aoAlterar').subscribe((result) => {
      this.livroId = result;
      console.log("AutorIdAntes:" + this.livroId)
    })
    console.log("AutorIdDepois:" + this.livroId)
  }

  alterarLivro() {
    this.livroServiceService.criarLivro(this.alteraLivroForm.value, this.livroAutoresIds).subscribe((result) => {
      this.successAlteraLivro = "Livror atualizado com sucesso"
      this.erroAlteraLivro = "";
      this.livroId = result
    }, error => {
      this.successAlteraLivro = "";
      this.erroAlteraLivro = "Ocorreu um erro ao atualizar o Livro";
    });
  }

  cancelar(): void {
    this.alteraLivroForm.reset();
  }

  onChange(opcao: any) {
    let item: number = this.livroAutoresIds.indexOf(opcao.value)
    if (opcao) {
      if (item <= -1) {
        this.livroAutoresIds.push(opcao.value)
      } else {
        this.livroAutoresIds.splice(item, 1)
      }
    } else {
      if (item == 0) {
        this.livroAutoresIds.splice(item, 0)
      }
    }
  }

  teste(obj: any) {
    alert(obj);
  }

}
