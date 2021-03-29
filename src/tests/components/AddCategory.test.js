import '@testing-library/jest-dom';

const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");

describe('Pruebas del componente AddCategory',()=>{

    //Para probar temporalmente.
    const setCategorias = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias = { setCategorias } />);

    beforeEach( () => {
        //Limpia todas la simulaciones realizadas.
        jest.clearAllMocks();
        //Reinicializada el wrapper.
        wrapper = shallow( <AddCategory setCategorias = { setCategorias } />);
    });

    test('Debe de mostrarse correctamente',()=>{
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto',()=>{
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('No debe postear información si se manda una catrgoria vacia', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // Como se mandó a llamar el submit sin una categoria, 
        // no se debe ejecutar la función de "setCategoria".
        expect( setCategorias ).not.toHaveBeenCalled();
    });
    
    test('Debe de llamar el setCategoria y limpiar la caja de texto', () => {
        const value = 'evangelion';
        
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect( setCategorias ).toHaveBeenCalled();
        expect( wrapper.find('input').text().trim() ).toBe('');

    })
    
})