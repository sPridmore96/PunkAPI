import React from 'react'
import "./SearchBar.scss"

const SearchBar = (props) => {

    const {searchTerm, handleInput, handleClick} = props

  return (
<div className='search-bar' >
    <label htmlFor="searchBar">Manual Search</label>
    <input type="text" name="searchBar" value={searchTerm} onClick={handleClick} onInput={handleInput}/>
</div>
  )
}

export default SearchBar