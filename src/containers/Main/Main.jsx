import React, { useEffect, useState } from 'react';
import './Main.scss';

import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';
import { useSearchParams } from 'react-router-dom';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCheckBox, setSelectedCheckBox] = useState('');
  const [amountShown, setAmmountShown] = useState(20);
  const [beerInfo, setBeerInfo] = useState([]);
  const [dataCopy, setDataCopy] = useState()
  const [checked, setChecked] = useState(false)



  const getBeerInfo = async (numberOfBeer, search) => {
    let url = `https://api.punkapi.com/v2/beers?per_page=${numberOfBeer}`;

    if (search) {
      url += `&beer_name=${search}`;
    }
    const result = await fetch(url);
    const data = await result.json();
    setBeerInfo(data);
    setDataCopy(data)
  };


  useEffect(() => {
    getBeerInfo(amountShown, searchTerm);
  }, [amountShown, searchTerm]);


  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    return setSearchTerm(cleanInput);
  };
  const handleCheckBox = (event) => {
    setSelectedCheckBox(event.target.id);
    setChecked(!checked)
    console.log(checked);


    switch (selectedCheckBox) {
      case 'Acidic (ph < 4)':
        if(checked) {
          const lowPH = beerInfo.filter((beer) => beer.ph < 4);
        setBeerInfo(lowPH);
        } else if (!checked) {
          setBeerInfo(dataCopy)
        }
        break
      case 'High ABV (> 6.0%)':
        if (checked) {
          console.log('high');
          const highABV = beerInfo.filter((beer) => beer.abv > 6);
          setBeerInfo(highABV);
        } else if (!checked) {
          setBeerInfo(dataCopy)
        }
        break;
      default:

        break;
    }
  };


  return (
    <div className="main">
      <h2 className="main__header">Punk API</h2>
      <div className="main__content">
        <NavBar
          handleCheckBox={handleCheckBox}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <CardList beerInfo={beerInfo} />
      </div>
    </div>
  );
};

export default Main;
