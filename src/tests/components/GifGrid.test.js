import '@testing-library/jest-dom';
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />',() => {
    
    const category = 'evangelion';

   
    
    test('Debe hacer match con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category = { category } />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar items cuando se cargan imagenes', () =>{

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/img.png',
            title: 'Cualquier titulo'
        },
        {
            id: 'DFG',
            url: 'https://localhost/img.png',
            title: 'Cualquier titulo'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category = { category } />);
        expect ( wrapper.find('p').exists() ).toBe(false);
        expect ( wrapper.find('GifGridItem').length ).toBe( gifs.length );

    });
    
})