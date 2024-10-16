import { Person } from './person';

export interface Grupo {
    getNombre():string;
    setNombre(nombre:string):void;
    getDescripcion():string;
    setDescripcion(descripcion:string):void;
    getPersona():Array<Person>;
    setPersona(p:Person):void;
    isVacia():boolean;
}
