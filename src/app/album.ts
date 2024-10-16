import { Foto } from './foto';

export class Album {
    private nombre:string;
    private descripcion:string;
    private listaFotos: Array<Foto> ;

    constructor(nombre:string, descripcion:string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.listaFotos = new Array<Foto>();
    }

    public getNombre():string {
        return this.nombre;
    }

    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }

    public getDescripcion():string {
        return this.descripcion;
    }

    public setDescripcion(descripcion:string):void {
        this.descripcion = descripcion;
    }

    public getListaFotos():Array<Foto>  {
        return this.listaFotos;
    }

    public setListaFotos(f:Foto):void {
        this.listaFotos.push(f);
    }

    public buscarFoto1(f:Foto):string {
            return f.buscarFoto(f.getNombreFichero());
    }

    public buscarFoto2(f:Foto):string {
                return f.buscarFoto();
    }

    public imprimirFotosAlbum() :string{
        var resultado = "";
        if (this.listaFotos.length==0) {
            resultado = "Error: No hay fotos";
        } else {
            for (var i = 0; i < this.listaFotos.length; i++) {
                var url = this.buscarFoto2(this.listaFotos[i]);
                resultado = resultado + "La url es: " +  url + "\n";
            }
        }
        return resultado;
    }
}
