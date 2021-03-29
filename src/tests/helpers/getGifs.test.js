const { getGifs } = require("../../helpers/getGifs");

describe('Pruebas con fetch gifs',() =>{

    it('Debe de traer 10 elementos', async () => {
        const gifs = await getGifs( 'sailor moon' );
        expect( gifs.length ).toBe( 10 );
    });

    it('No debe retornar nada si se manda una categoria en blancp', async () => {
        const gifs = await getGifs( '' );
        expect( gifs.length ).toBe( 0 );
    });
})