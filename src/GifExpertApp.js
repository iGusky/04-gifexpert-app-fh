import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) =>{

  // const categorias = ['Evangelion', 'Sailor Moon', 'Star Wars'];

  const [categorias, setCategorias] = useState(defaultCategories);

  //const handleAdd = () => {
    //Primera forma de agregarlo
   // setCategorias ([...categorias, 'HunterXHunter']);
    //Forma alternativa
    //setCategorias( cats => [--cats, 'HunterXHunter']);
  //}

  return (<>
    <h2>GifExpertApp</h2>
    <AddCategory setCategorias = { setCategorias } />
    <hr></hr>

    <ol>
      {
        categorias.map( categoria => {
          // return <li key={ categoria }>{ categoria }</li>
          return <GifGrid 
            key = { categoria }
            category={ categoria }/>
        })
      }
    </ol>

    {/* <button onClick={handleAdd}>agregar</button> */}
  </>);
};

export default GifExpertApp;