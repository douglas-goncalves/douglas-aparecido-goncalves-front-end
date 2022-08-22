import { AutorModel } from '../../models/autor-model';
import { AutorServiceService } from '../../services/autor-service.service';
import { LivroServiceService } from '../../services/livro-service.service';
import { Component, OnInit, ɵresetJitOptions } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-livro',
  templateUrl: './formulario-livro.component.html',
  styleUrls: ['./formulario-livro.component.css']
})
export class FormularioLivroComponent implements OnInit {

  livroId: any;

  cadastroLivroForm: FormGroup
  livroAutoresIds: Array<number> = []
  autores: Array<AutorModel> = [];

  erroCriaLivro: string = '';
  successCriaLivro: string = ''

  constructor(
    private livroServiceService: LivroServiceService,
    private formBuilder: FormBuilder,
    private autorService: AutorServiceService

  ) {
    this.cadastroLivroForm = this.formBuilder.group({
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
  }

  criarLivro() {
    this.livroServiceService.criarLivro(this.cadastroLivroForm.value, this.livroAutoresIds).subscribe(result => {
      this.erroCriaLivro = "";
      this.successCriaLivro = "Livror cadastrado com sucesso"
    }, error => {
      this.erroCriaLivro = "Ocorreu um erro ao cadastrar o Livro";
      this.successCriaLivro = "";
    });
  }

  cancelar(): void {
    this.cadastroLivroForm.reset();
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
}
