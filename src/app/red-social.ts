import { Grupo } from './grupo';
import { Person } from './person';
import { Mensaje } from './mensaje';
import { Foto } from './foto';

export class RedSocial {
    private nombreRedSocial:string;
    private listaGrupos:Array<Grupo>;
    private listaPersona:Array<Person>;

    constructor(nombreRedSocial:string) {
        this.nombreRedSocial = nombreRedSocial;
        this.listaGrupos = new Array<Grupo>();
        this.listaPersona = new Array<Person>();
    }

    public getNombreRedSocial():string {
        return this.nombreRedSocial;
    }

    public setNombreRedSocial(nombreRedSocial:string):void {
        this.nombreRedSocial = nombreRedSocial;
    }

    public getListaGrupos():Array<Grupo> {
        return this.listaGrupos;
    }

    public setListaGrupos(g:Grupo):void {
        this.listaGrupos.push(g);
    }

    public getListaPersona():Array<Person> {
        return this.listaPersona;
    }

    public setListaPersona(p:Person):void {
        for (var i = 0; i < this.getListaPersona().length; i++) {
            let per = this.getListaPersona()[i];
            if(!(per.getEmail() === p.getEmail())){
                this.listaPersona.push(p);
            }
            else{
                throw new Error("El correo ya se encuentra registrado");
            }
        }
    }
    
    public login(email:string, password:string):boolean{
        for (var i = 0; i < this.getListaPersona().length; i++) {
            var p = this.getListaPersona()[i];
            if(p.getEmail()=== email && p.getPassword()===password){
                return true;
            }            
        }
        return false;
    }
    
    public publicarMensajePublico(m:Mensaje,envia:Person):void{
        envia.setListaMensajes(m);
    }
    
    public publicarMensajePrivado(m:Mensaje, envia:Person, recibe:Person):void{
        envia.setListaMensajes(m);
    }
    
    public publicarfoto(nombreAlbum:string, f:Foto,p:Person):void{
        p.agregarFoto(nombreAlbum, f);
    }
    
    public verMensajesPublicos(p:Person):void{
        p.imprimirMensajesPublicos();
    }
       
    public verMensajesPrivados(p:Person):void{
        p.imprimirMensajesPrivados();
    }
    
    public etiquetarFoto(nombreFichero:string, p:Person, etiqueta:Person):void{
        p.etiquetarFoto(nombreFichero, etiqueta);
    }
    
    public verEtiquetas(nombreFichero:string, p:Person):void{
        p.verEtiquetas(nombreFichero);
    }
}