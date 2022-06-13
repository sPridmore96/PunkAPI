import React from 'react'
import "./NavBar.scss"
import RadioButton from '../../components/RadioButton/RadioButton'
import SearchBar from '../../components/SearchBar/SearchBar'
import Form from '../../components/Form/Form'

const NavBar = (props) => {

    const {searchTerm, handleInput, handleRadio} = props

  return (
    <div className='nav'>
        <h2>Explore?</h2>
        <Form handleRadio={handleRadio} searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  )
}

export default NavBar