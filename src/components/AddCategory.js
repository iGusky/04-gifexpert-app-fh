import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategorias} ) => {

  const [inputValue, setInputValue ] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategorias( cats => [ inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit } >
        <p>{inputValue}</p>
      <input
        type = "text"
        value = {inputValue}
        onChange = {(e) => handleInputChange(e)}
      />
    </form>
  )
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired
};
