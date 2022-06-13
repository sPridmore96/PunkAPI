import React from 'react'
import "./Form.scss"

import RadioButton from '../RadioButton/RadioButton'
import SearchBar from '../SearchBar/SearchBar'

const Form = (props) => {
    const {searchTerm, handleInput, handleRadio} = props
  return (
    <form action="">
        <SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
        <RadioButton name={"Classic"} />
        <RadioButton name={"Acidic (ph < 4)"}/>
        <RadioButton name={"High ABV (> 6.0%)"}/>
    </form>
  )
}

export default Form