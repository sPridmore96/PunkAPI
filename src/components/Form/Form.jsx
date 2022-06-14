import React from 'react'
import "./Form.scss"

import CheckBoxes from '../CheckBoxes/CheckBoxes'
import SearchBar from '../SearchBar/SearchBar'



const Form = (props) => {
    const {searchTerm, handleInput, handleCheckBox} = props
  return (
    <form>
        <SearchBar searchTerm={searchTerm} handleInput={handleInput}/>
        <CheckBoxes handleCheckBox={handleCheckBox} argument={"Classic"}/>
        <CheckBoxes handleCheckBox={handleCheckBox} value={4} argument={"Acidic (ph < 4)"}/>
        <CheckBoxes handleCheckBox={handleCheckBox} value={6} argument={"High ABV (> 6.0%)"}/>
    </form>
  )
}

export default Form