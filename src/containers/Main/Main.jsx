import React, {useState} from 'react'
import "./Main.scss"

import CardList from '../CardList/CardList'
import NavBar from '../NavBar/NavBar'



const Main = ({beersArr}) => {


    const [searchTerm, setSearchTerm] = useState("");
    const [searchedBeer, setSearchedBeer] = useState(beersArr)

    const handleInput = (event) => {
      const cleanInput = event.target.value.toLowerCase()
      setSearchTerm(cleanInput)
    };

    const handleRadio = (event) => {
        const pressedRadio = event.target.id
        switch (pressedRadio) {
          case "Classic": 
          console.log("Classic");
          
          break
          case "Acidic (ph < 4)": 
          console.log("Acid");
           const lowPH = beersArr.filter(beer => beer.ph < 4) 
           setSearchedBeer(lowPH)
          break 
          case "High ABV (> 6.0%)": 
          console.log("high");
          const highABV = beersArr.filter(beer => beer.abv > 6)
          setSearchedBeer(highABV)
          break
          default: console.log("default");
          break
        }
    };

    const userSearch = beersArr.filter(beer => {
        const beerNameLower = beer.name.toLowerCase()
        return beerNameLower.includes(searchTerm)
    })
  return (
    <div className='main'>
        <h2 className='main__header'>Punk API</h2>
        <div className='main__content'>
        <NavBar handleRadio={handleRadio} searchTerm={searchTerm} handleInput={handleInput} />
        <CardList userSearch={userSearch}/>
        </div>
    </div>
  )
}

export default Main