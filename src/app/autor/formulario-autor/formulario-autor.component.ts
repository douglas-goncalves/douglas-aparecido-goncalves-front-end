import { AutorServiceService } from '../../services/autor-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-autor',
  templateUrl: './formulario-autor.component.html',
  styleUrls: ['./formulario-autor.component.css']
})
export class FormularioAutorComponent implements OnInit {
  cadastroAutorForm: FormGroup

  erroCriaAutor: string = '';
  successCriaAutor: string = ''

  constructor(private autorServiceService: AutorServiceService, private formBuilder: FormBuilder) {
    this.cadastroAutorForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  criarAutor() {
    this.autorServiceService.criarAutor(this.cadastroAutorForm.value).subscribe(result => {
      this.erroCriaAutor = "";
      this.successCriaAutor = "Autor cadastrado com sucesso"
    }, error => {
      this.erroCriaAutor = 'Ocorreu um erro ao cadastrar o autor';
      this.successCriaAutor = "";
    });
    this.cadastroAutorForm.reset();
  }

  cancelar(): void {
    this.cadastroAutorForm.reset();
  }

}
