import { Mensaje } from './mensaje';
import { Foto } from './foto';
import { Grupo } from './grupo';
import { Album } from './album';

export class Person {
    private email:string;
    private nombre:string;
    private apellido1:string;
    private apellido2:string;
    private password:string;
    private sexo:string; //F = FEMENINO Y M = MASCULINO
    private listaMensajes:Array<Mensaje>;
    private listaAlbumes:Array<Album>;
    private listaFotos:Array<Foto> ;
    private listaAmigos: Array<Person>;
    private listaSolicitudes:Array<Person>;
    private listaGrupos:Array<Grupo> ;

    constructor(email:string, nombre:string, apellido1:string,
         apellido2:string, password:string, sexo:string) {
        this.email = email;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.password = password;
        this.sexo = sexo;
        this.listaSolicitudes = new Array<Person>();
        this.listaAlbumes = new Array<Album>();
        this.listaMensajes = new Array<Mensaje>();
        this.listaFotos = new Array<Foto>();
        this.listaAmigos = new Array<Person>();
        this.listaGrupos = new Array<Grupo>();
    }

    public getEmail():string {
        return this.email;
    }

    public setEmail(email:string):void {
        this.email = email;
    }

    public getNombre():string {
        return this.nombre;
    }

    public setNombre(nombre:string):void {
        this.nombre = nombre;
    }

    public getApellido1() :string{
        return this.apellido1;
    }

    public setApellido1(apellido1:string) :void{
        this.apellido1 = apellido1;
    }

    public getApellido2() :string{
        return this.apellido2;
    }

    public setApellido2(apellido2:string) :void{
        this.apellido2 = apellido2;
    }

    public getPassword():string {
        return this.password;
    }

    public setPassword(password:string):void {
        this.password = password;
    }

    public getSexo():string {
        return this.sexo;
    }

    public setSexo(sexo:string):void {
        this.sexo = sexo;
    }

    public getListaAlbumes():Array<Album> {
        return this.listaAlbumes;
    }

    public setListaAlbumes(a:Album):void {
        this.listaAlbumes.push(a);
    }

    public getListaAmigos():Array<Person> {
        return this.listaAmigos;
    }

    public setListaAmigos(p:Person):void {
        this.listaAmigos.push(p);
    }

    public getListaFotos():Array<Foto> {
        return this.listaFotos;
    }

    public setListaFotos(f:Foto):void {
        this.listaFotos.push(f);
    }

    public getListaMensajes():Array<Mensaje> {
        return this.listaMensajes;
    }

    public setListaMensajes(m:Mensaje):void {
        this.listaMensajes.push(m);
    }

    public getListaSolicitudes():Array<Person> {
        return this.listaSolicitudes;
    }

    public setListaSolicitudes(p:Person):void {
        this.listaSolicitudes.push(p);
    }

    public getListaGrupos():Array<Grupo> {
        return this.listaGrupos;
    }

    public setListaGrupos(g:Grupo):void {
        this.listaGrupos.push(g);
    }
    
    public imprimirMensajesPrivados():string {
        var resultado = "";
        for (var i = 0; i < this.getListaMensajes().length; i++) {
            var m = this.getListaMensajes()[i];
            if (m.isTipo()) {
                resultado = resultado + m.toString() + "\n";
            }
        }
        return resultado;
    }

    public imprimirMensajesPublicos():string {
        var resultado = "";
        for (var i = 0; i < this.getListaMensajes().length; i++) {
            var m = this.getListaMensajes()[i];
            if (!m.isTipo()) {
                resultado = resultado + m.toString() + "\n";
            }
        }
        return resultado;
    }

    public agregarFoto(nombreAlbum:string, f:Foto) :void{
        for (var i = 0; i < this.getListaAlbumes().length; i++) {
            var a = this.getListaAlbumes()[i];
            if (a.getNombre()=== nombreAlbum) {
                a.setListaFotos(f);
                break;
            }
        }
    }

    // Función usada
    public etiquetarFoto(nombreFichero:string, p:Person):void{
        for (var i = 0; i < this.getListaFotos().length; i++) {
            var f = this.getListaFotos()[i];
            if(f.buscarFoto(nombreFichero)===""){
                throw new Error("La foto no existe");
            }
            else{
                if(f.getNombreFichero()===nombreFichero){
                    f.setEtiqueta(p);
                    break;
                }
            }
        }
    }
    
    // Función usada
    public verEtiquetas(nombreFichero:string):string{
        var resultado = "";
        for (var i = 0; i < this.getListaFotos().length; i++) {
            var f = this.getListaFotos()[i];
            if(f.buscarFoto(nombreFichero)===""){
                throw new Error("La foto no existe");
            }
            else{
                if(f.getNombreFichero()===nombreFichero){
                    let lista = f.getEtiqueta();
                    for (var i = 0; i< lista.length; i++){
                        var p = lista[i];
                        resultado = resultado + p.getNombre() + " " + p.getApellido1() + "\n";
                    }
                    break;
                }
            }
        }
        return resultado;
    }
}
