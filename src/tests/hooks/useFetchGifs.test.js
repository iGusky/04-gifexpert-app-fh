import { renderHook, act } from '@testing-library/react-hooks'
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe retornar el estado incial', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Evangelion') );
        const { data, loading } = result.current;

        await waitForNextUpdate(); 
       
        expect( data ).toEqual( [] );
        expect( loading ).toBe( true );
    });

    test('Debe retornar arreglo de imagenes y loading en Flase', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Evangelion') );
        await waitForNextUpdate(); 
        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );
    })
    
    
})
