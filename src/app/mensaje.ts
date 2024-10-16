import { Person } from './person';

export class Mensaje {
    private Contenido:string;
    private persona:Person;
    private tipo: boolean; // TRUE = MENSAJE PRIVADO Y FALSE = MENSAJE PUBLICO

    constructor(Contenido:string, persona:Person, tipo:boolean) {
        this.Contenido = Contenido;
        this.persona = persona;
        this.tipo = tipo;
    }

    public getContenido():string {
        return this.Contenido;
    }

    public setContenido(Contenido:string):void {
        this.Contenido = Contenido;
    }

    public getPersona():Person {
        return this.persona;
    }

    public setPersona(persona:Person):void {
        this.persona = persona;
    }

    public isTipo():boolean {
        return this.tipo;
    }

    public setTipo(tipo:boolean):void {
        this.tipo = tipo;
    }

    public toString() :string{
        return "Mensaje{" + ", Contenido=" + this.Contenido 
            + ", persona=" + this.persona.getNombre() + " " 
            + this.persona.getApellido1() + ", Tipo=" 
            + this.tipo + '}';
    }
}
