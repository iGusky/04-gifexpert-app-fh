import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {

    const titulo = 'Un titulo cualquiera';
    const url = 'https://localhost/imagen.jpg';
    let wrapper = shallow(<GifGridItem title = { titulo } url = { url }/>);

    it('Debe renderizar el componente <GifGridItem /> correctamente',() => {
        expect(wrapper).toMatchSnapshot();
    });

    it('Debe tener el párrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( titulo );
    });

    it('Debe tener la imagen igual al url y alt  de los props', () => {
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( titulo );
    });

    it('El div, debe tener la clase "animate__fadeIn"',() => {
        const div = wrapper.find('div');
        expect( div.hasClass('animate__fadeIn') ).toBe(true);
    })
 
});
