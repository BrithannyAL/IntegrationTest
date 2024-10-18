import { Album } from './album';
import { Foto } from './foto';
import { mock, when, instance, reset } from 'ts-mockito';

describe('Album', () => {
    let album: Album;
    let mockedFoto1 = mock<Foto>();
    let mockedFoto2 = mock<Foto>();
    let foto1 = instance(mockedFoto1);
    let foto2 = instance(mockedFoto2);

    beforeEach(() => {
        album = new Album("Vacaciones", "Fotos de las vacaciones");
        mockedFoto1 = mock<Foto>();
        mockedFoto2 = mock<Foto>();
        foto1 = instance(mockedFoto1);
        foto2 = instance(mockedFoto2);
    });

    afterEach(() => {
        reset(mockedFoto1);
        reset(mockedFoto2);
    });

    // Nombre de la prueba: La instancia de álbum es creada correctamente
    // Objetivo: Verificar que la instancia de la clase Album se crea correctamente.
    // Datos de prueba: Ninguno.
    // Resultado esperado: La instancia de Album debe ser creada correctamente.
    it('La instancia de álbum es creada correctamente', () => {
        expect(album).toBeTruthy();
    });

    // Nombre de la prueba: Imprimir álbum con fotos
    // Objetivo: Verificar que se imprimen correctamente las URLs de las fotos en el álbum.
    // Datos de prueba: Dos fotos con URLs "url1" y "url2".
    // Resultado esperado: Debe devolver una cadena con las URLs de las fotos.
    it('Imprimir álbum con fotos', () => {
        when(mockedFoto1.buscarFoto()).thenReturn("url1");
        when(mockedFoto2.buscarFoto()).thenReturn("url2");

        album.setListaFotos(foto1);
        album.setListaFotos(foto2);
        expect(album.imprimirFotosAlbum()).toBe("La url es: url1\nLa url es: url2\n");
    });

    // Nombre de la prueba: Imprimir álbum con fotos con y sin url correctamente
    // Objetivo: Verificar que si alguna foto no la encuentra se muestre un espacio vacio 
    // Datos de prueba: Una foto con url valido 'url' y otra sin url valido, por lo tanto ya no existe la foto ".
    // Resultado esperado: Debe devolver una cadena con las URL y un espacio vacio en el caso de que la foto no se encontro.
    it('Álbum con fotos con y sin url validos', () => {
        when(mockedFoto1.buscarFoto()).thenReturn("url1");
        when(mockedFoto2.buscarFoto()).thenReturn("");

        album.setListaFotos(foto1);
        album.setListaFotos(foto2);
        expect(album.imprimirFotosAlbum()).toBe("La url es: url1\nLa url es: \n");
    });

});