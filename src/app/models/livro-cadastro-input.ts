import { AutorModel } from "./autor-model";

export interface LivroCadastroInput {
  titulo: string;
  anoLancamento:string;
  autoresIds:Array<number>;
}
