import { Person } from './person';
import {Foto} from './foto';
import { mock, when, instance, verify } from 'ts-mockito';
import e from 'express';

describe('Person', () => {
    let nombreFichero: string;
    let person: Person;
    let mockedFoto = mock<Foto>();
    let foto = instance(mockedFoto);
    let foto2 = instance(mockedFoto);
    let foto3 = instance(mockedFoto);
    let foto4 = instance(mockedFoto);

    beforeEach(() => {
        nombreFichero = 'foto1.jpg';
        person = new Person("pepe@gmail.com", "Pepe", "Apellido1", "Apellido2", "1234", "sexo");
        mockedFoto = mock<Foto>();

        foto = instance(mockedFoto);
        foto2 = instance(mockedFoto);
        foto3 = instance(mockedFoto);
        foto4 = instance(mockedFoto);

        person.setListaFotos(foto);
        person.setListaFotos(foto2);
        person.setListaFotos(foto3);
        person.setListaFotos(foto4);
    });

    it('La instancia de persona es creada correctamente', () => {
        expect(person).toBeTruthy();
    });

    it('Etiquetar en una foto existente', () => {
        const etiquetaPerson = new Person("juan@gmail.com", "Juan", "Apellido1", "Apellido2", "1234", "sexo");

        when(mockedFoto.buscarFoto(nombreFichero)).thenReturn(nombreFichero);
        when(mockedFoto.getNombreFichero()).thenReturn(nombreFichero);
        person.etiquetarFoto(nombreFichero, etiquetaPerson);

        verify(mockedFoto.setEtiqueta(etiquetaPerson)).once();
    });

    it('Etiquetar en una foto que no existe', () => {
        const etiquetaPerson = new Person("juan@gmail.com", "Juan", "Apellido1", "Apellido2", "1234", "sexo");
        when(mockedFoto.buscarFoto(nombreFichero)).thenReturn("");

        expect(() => {
            person.etiquetarFoto(nombreFichero, etiquetaPerson);
        }).toThrowError("La foto no existe");
    });

    it('Ver etiquetas de una foto existente', () => {
        const etiquetaPerson1 = new Person("juan@gmail.com", "Juan", "Apellido1", "Apellido2", "1234", "sexo");
        const etiquetaPerson2 = new Person("maria@gmail.com", "Maria", "Apellido1", "Apellido2", "5678", "sexo");
        const etiquetas = [etiquetaPerson1, etiquetaPerson2];

        when(mockedFoto.buscarFoto(nombreFichero)).thenReturn(nombreFichero);
        when(mockedFoto.getNombreFichero()).thenReturn(nombreFichero);
        when(mockedFoto.getEtiqueta()).thenReturn(etiquetas);
        
        expect(person.verEtiquetas(nombreFichero)).toBe("Juan Apellido1\nMaria Apellido1\n");
    });

});