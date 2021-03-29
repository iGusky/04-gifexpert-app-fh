import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas del componente <GifExpertApp />', () => {
    test('Debe renderizarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['Evangelion','Star wars'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories }/>)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
})
