import { Person } from './person';
import {Foto} from './foto';
import { mock, when, instance, verify, reset } from 'ts-mockito';

describe('Person', () => {
    let nombreFichero: string;
    let person: Person;
    let mockedFoto = mock<Foto>();
    let foto = instance(mockedFoto);
    let etiquetaPerson1: Person;
    let etiquetaPerson2: Person;
    
    beforeEach(() => {
        nombreFichero = 'foto1.jpg';
        person = new Person("pepe@gmail.com", "Pepe", "Apellido1", "Apellido2", "1234", "sexo");
        etiquetaPerson1 = new Person("juan@gmail.com", "Juan", "Apellido1", "Apellido2", "1234", "sexo");
        etiquetaPerson2 = new Person("maria@gmail.com", "Maria", "Apellido1", "Apellido2", "5678", "sexo");
        mockedFoto = mock<Foto>();
        foto = instance(mockedFoto);
        person.setListaFotos(foto);
    });

    afterEach(() => {
        reset(mockedFoto);
    });

    // Nombre de la prueba: La instancia de persona es creada correctamente
    // Objetivo: Verificar que la instancia de la clase Person se crea correctamente.
    // Datos de prueba: Ninguno.
    // Resultado esperado: La instancia de Person debe ser creada correctamente.
    it('La instancia de persona es creada correctamente', () => {
        expect(person).toBeTruthy();
    });

    // Nombre de la prueba: Ver etiquetas de una foto existente
    // Objetivo: Verificar que se pueden ver las etiquetas de una foto existente.
    // Datos de prueba: nombreFichero = 'foto1.jpg', etiquetas = [etiquetaPerson1, etiquetaPerson2]
    // Resultado esperado: Debe devolver una cadena con los nombres y apellidos de las personas etiquetadas.
    it('Ver etiquetas de una foto existente', () => {
        const etiquetas = [etiquetaPerson1, etiquetaPerson2];

        when(mockedFoto.buscarFoto(nombreFichero)).thenReturn(nombreFichero);
        when(mockedFoto.getNombreFichero()).thenReturn(nombreFichero);
        when(mockedFoto.getEtiqueta()).thenReturn(etiquetas);

        expect(person.verEtiquetas(nombreFichero)).toBe("Juan Apellido1\nMaria Apellido1\n");
    });

    // Nombre de la prueba: Ver etiquetas de una foto no existente
    // Objetivo: Verificar que no se puede ver la etiqueta de una foto que no existe.
    // Datos de prueba: nombreFichero = 'foto1.jpg'
    // Resultado esperado: Debe lanzar un error con el mensaje "La foto no existe".
    it('Ver etiquetas de una foto no existente', () => {
        when(mockedFoto.buscarFoto(nombreFichero)).thenReturn("");

        expect(() => {
            person.verEtiquetas(nombreFichero);
        }).toThrowError("La foto no existe");
    });
});