import React, {useState} from 'react'
import "./Main.scss"

import CardList from '../CardList/CardList'
import NavBar from '../NavBar/NavBar'



const Main = ({beersArr}) => {


    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
      const cleanInput = event.target.value.toLowerCase()
      setSearchTerm(cleanInput)
    };

    const handleRadio = (event) => {
        console.log(event);
    };

    const searchedBeers = beersArr.filter(beer => {
        const beerNameLower = beer.name.toLowerCase()
        return beerNameLower.includes(searchTerm)
    })

  return (
    <div className='main'>
        <h2 className='main__header'>Punk API</h2>
        <div className='main__content'>
        <NavBar handleRadio={handleRadio} searchTerm={searchTerm} handleInput={handleInput} />
        <CardList searchedBeers={searchedBeers}/>
        </div>
    </div>
  )
}

export default Main