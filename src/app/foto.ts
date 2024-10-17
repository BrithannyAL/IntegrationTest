import { Person } from './person';

export interface Foto {
    setEtiqueta(etiqueta:Person):void;
    getEtiqueta(): Array<Person>;
    setRuta(ruta:string):void;
    getRuta(): string;
    setNombreFichero(nombreFichero:string):void;
    getNombreFichero():string;
    buscarFoto(nombreFichero:string):string; 
    buscarFoto():string;
    verFoto():void;
}