import { AutorModel } from "./autor-model";

export interface LivroAtualizacaoInput {
  titulo: string;
  anoLancamento:string;
  autoresIds:Array<number>;
}
