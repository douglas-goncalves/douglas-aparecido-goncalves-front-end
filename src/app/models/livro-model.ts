import { AutorModel } from "./autor-model";

export interface LivroModel {
  id:number;
  titulo: string;
  anoLancamento:string;
  autores:Array<AutorModel>
}
