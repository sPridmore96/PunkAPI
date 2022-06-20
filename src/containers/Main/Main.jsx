import React, { useEffect, useState } from 'react';
import './Main.scss';
import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [beerInfo, setBeerInfo] = useState([]);
  const [acidicBeers, setAcidicBeers] = useState([]);
  const [options, setOptions] = useState([]);
  const [beersOptionsData, setBeerOptionsData] = useState([]);
  const [urlState, setUrlState] = useState(
    `https://api.punkapi.com/v2/beers?page=1&per_page=80&`
  );
  const [showNoBeers, setShowNoBeers] = useState(true)



  useEffect(() => {
    getBeerInfo();
  }, [searchTerm, urlState, beersOptionsData]);

  useEffect(() => {
    getAcidicBeers();
  }, []);

  const getAcidicBeers = async () => {
    const res = await fetch(
      'https://api.punkapi.com/v2/beers?page=1&per_page=80&'
    );
    const data = await res.json();
    setAcidicBeers(data);
  };

  const getBeerInfo = async () => {
    const res = await fetch(urlState);
    const data = await res.json();
    setBeerInfo(data);

  };

  const handleFiltersToUse = (options) => {
    let classic = false;
    let highAbv = false;
    let acidic = false;

    for (let i = 0; i < options.length; i++) {
      if (options[i] === 'Classic') {
        classic = true;
      }     
      else if (options[i] === 'High ABV (> 6.0%)') {
        highAbv = true;
      } 
      else if (options[i] === 'Acidic (ph < 4)') {
        acidic = true;
      }
    }


    if (classic && !highAbv && !acidic) {
      setUrlState('https://api.punkapi.com/v2/beers?page=1&&brewed_before=01-2010');
      
    }
    
    
    else if (highAbv && !classic && !acidic) {
      setUrlState('https://api.punkapi.com/v2/beers?page=1&&abv_gt=6');
      
    } 
    
    
    else if (acidic && !classic && !highAbv) {
      const newArr = [...acidicBeers];
      const newArrAcidic = newArr.filter((beer) => {
        return beer.ph < 4;
      });
      setBeerInfo(newArrAcidic);
      
    } 
    
    
    else if (classic && highAbv && !acidic) {
      setUrlState(
        'https://api.punkapi.com/v2/beers?page=1&&brewed_before=01-2010&abv_gt=6'
      ); 
    } 
    
    
    else if(classic && !highAbv && acidic) {
      
      setShowNoBeers(false)
      setUrlState('');
      return (<p>no beers</p>)
    }
    
  
    
    else if (classic && highAbv && acidic) {
      
      setShowNoBeers(false)
      setUrlState('');
      return (<p>no beers</p>)
    } 
    
    
    else if (!classic && highAbv && acidic) {
      
      setShowNoBeers(false)
      setUrlState('');
      return (<p>no beers</p>)
    } 
    
    else {
      console.log(1);
      getBeerInfo()
      setUrlState(`https://api.punkapi.com/v2/beers?page=1&`)
    }
  };

  const handleSearchFilter = (searchTerm) => {
    if (searchTerm) {
      setUrlState(`https://api.punkapi.com/v2/beers?page=1&beer_name=${searchTerm}`);
    } else if (!searchTerm) {
      setUrlState(`https://api.punkapi.com/v2/beers?page=1&`);
    }
  };
  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
    handleSearchFilter(cleanInput);
  };

  const handleCheckBox = (event) => {
    const id = event.target.id;
    const optionsDuplicate = [...options];
    let index = optionsDuplicate.indexOf(id);

    if (index === -1) {
      optionsDuplicate.push(id);
      setOptions(optionsDuplicate);
    } else {
      setShowNoBeers(true)
      getBeerInfo()
      optionsDuplicate.splice(index, 1);
      setOptions(optionsDuplicate);
    }
    setOptions(optionsDuplicate);
    handleFiltersToUse(optionsDuplicate);
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
        <CardList showNoBeers={showNoBeers} beerInfo={beerInfo} />
        {/* <CardMoreInfo beerInfo={beerInfo} /> */}
      </div>
    </div>
  );
};

export default Main;
