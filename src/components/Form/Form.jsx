import React from 'react'
import "./Form.scss"

import RadioButton from '../RadioButton/RadioButton'
import SearchBar from '../SearchBar/SearchBar'

import { Link } from 'react-router-dom';

const Form = (props) => {
    const {searchTerm, handleInput, handleRadio} = props
  return (
    <form>
        <SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
        <RadioButton handleRadio={handleRadio} name={"Classic"} />
        <RadioButton handleRadio={handleRadio} name={"Acidic (ph < 4)"}/>
        <RadioButton handleRadio={handleRadio} name={"High ABV (> 6.0%)"}/>
    </form>
  )
}

export default Form