import React, { useEffect, useState } from 'react';
import './Main.scss';

import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';
import CardMoreInfo from '../../components/CardMoreInfo/CardMoreInfo';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [amountShown, setAmountShown] = useState(80);
  const [beerInfo, setBeerInfo] = useState([]);
  // const [dataCopy, setDataCopy] = useState();
  // const [urlTag, setUrlTag] = useState();
  const [options, setOptions] = useState([]);
  // const [isAcidic, setIsAcidic] = useState();
  // const [checked, setChecked] = useState(false);
  const [urlState, setUrlState] = useState(`https://api.punkapi.com/v2/beers?`);
  const [id, setId] = useState();

  useEffect(() => {
    const getBeerInfo = async () => {
      let url = urlState;
      const res = await fetch(url);
      const data = await res.json();
      setBeerInfo(data);
      console.log(`UseEffect Used`);
    };

    getBeerInfo();
    // handleSearchFilter();
  }, [searchTerm, urlState, options]);

  // const [options, setOptions] = useState([])

  const handleFiltersToUse = () => {
    const optionsCopy = [...options];
    optionsCopy.forEach((option) => {
      console.log(option.id);
      let url = urlState;

    });
  };
  handleFiltersToUse();
  const handleSearchFilter = () => {
    if (searchTerm) {
      // let url = urlState
      // url += `beer_name=${searchTerm}`;
      // setUrlState(url)
      setUrlState(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`);
    } else if (!searchTerm) {
      setUrlState(`https://api.punkapi.com/v2/beers?`);
    }
  };

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchTerm(cleanInput);
  };

  const handleCheckBox = (event) => {
    const ticked = event.target.checked;
    setId(event.target.id);
    const obj = event.target;
    if (ticked) {
      const copy = [...options];
      copy.push(obj);
      setOptions(copy);
    } else {
      const copy = [...options];
      const index = copy.indexOf(obj);
      copy.splice(index, 1);
      setOptions(copy);
    }

    // selectedID.push(id);
    // console.log(selectedID);

    // if (checked) {
    //   switch (id) {
    //     case 'Acidic (ph < 4)':
    //       setIsAcidic(checked);
    //       const lowPH = beerInfo.filter((beer) => beer.ph < 4);
    //       setBeerInfo(lowPH);
    //       break;
    //     case 'High ABV (> 6.0%)':
    //       setUrlTag(`&abv_gt=6`);
    //       break;
    //     case 'Classic':
    //       setUrlTag(`&brewed_before=01-2010`);
    //       break;
    //     default:
    //       setUrlTag();
    //       break;
    //   }
    //   if (id === 'Acidic (ph < 4)') {
    //   }
    // } else {
    //   setUrlTag();
    //   setBeerInfo(dataCopy);
    // }
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
            {/* <CardMoreInfo beerInfo={beerInfo} /> */}
          </div>
        </div>

  );
};

export default Main;
