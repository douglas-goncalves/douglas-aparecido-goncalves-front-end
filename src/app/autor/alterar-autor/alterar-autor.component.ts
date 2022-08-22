import { EventEmitterServiceService } from './../../services/event-emitter-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorServiceService } from '../../services/autor-service.service';

@Component({
  selector: 'app-alterar-autor',
  templateUrl: './alterar-autor.component.html',
  styleUrls: ['./alterar-autor.component.css']
})
export class AlterarAutorComponent implements OnInit {
  @Input() autorId:any;
  //autorId: any;

  alteraAutorForm: FormGroup

  erroCriaAutor: string = '';
  successAlteraAutor: string = ''
  erroAlteraAutor: string = ''

  constructor(private autorServiceService: AutorServiceService, private formBuilder: FormBuilder) {
    this.alteraAutorForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    EventEmitterServiceService.get('aoAlterar').subscribe((result) => {
      this.autorId = result;
      console.log("AutorIdAntes:" + this.autorId)
    })
    console.log("AutorIdDepois:" + this.autorId)
  }

  alterarAutor() {
    EventEmitterServiceService.get('aoAlterar').subscribe((result) => {
      this.successAlteraAutor = "Autor atualizado com sucesso";
      this.erroAlteraAutor = "";
      this.autorId = result;
    }, error => {
      this.successAlteraAutor = "";
      this.erroAlteraAutor = "Ocorreu um erro ao atualizar o Autor";
    })

    console.log(this.autorId);
    this.autorServiceService.alteraAutor(this.autorId, this.alteraAutorForm.value).subscribe(result => {

    });
    this.alteraAutorForm.reset();
  }

  cancelar(): void {
    this.alteraAutorForm.reset();
  }

}
