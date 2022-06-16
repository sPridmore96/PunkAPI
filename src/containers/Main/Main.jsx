import React, { useEffect, useState } from 'react';
import './Main.scss';

import CardList from '../CardList/CardList';
import NavBar from '../NavBar/NavBar';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [amountShown, setAmountShown] = useState(80);
  const [beerInfo, setBeerInfo] = useState([]);
  const [dataCopy, setDataCopy] = useState();
  const [urlTag, setUrlTag] = useState();
  const [options, setOptions] = useState([])

  useEffect(() => {
    const getBeerInfo = async (numberOfBeer, search) => {
      let url = `https://api.punkapi.com/v2/beers?per_page=${numberOfBeer}`;

      console.log(urlTag);

      if (search) {
        url += `&beer_name=${search}`;
      }

      if (urlTag) {
        url += `${urlTag}`;
      }

      const result = await fetch(url);
      const data = await result.json();
      setBeerInfo(data);
      setDataCopy(data);
    };

    getBeerInfo(amountShown, searchTerm);
  }, [amountShown, searchTerm, urlTag]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    return setSearchTerm(cleanInput);
  };
  // const [options, setOptions] = useState([])
  const selectedID = []
  const handleCheckBox = (event) => {
    const checked = event.target.checked;
    const id = event.target.id;
 
    selectedID.push(id)
    console.log(selectedID);
    const optionArr = ['High ABV (> 6.0%)', 'Acidic (ph < 4)', "Classic" ]

    const currentOptions = optionArr.filter(option => option.includes(id))
    // console.log(currentOptions);


    // if (checked) {
    //   switch (id) {
    //     case 'Acidic (ph < 4)':
    //       const lowPH = beerInfo.filter((beer) => beer.ph < 4);
    //       setBeerInfo(lowPH);
    //       break;
    //     case 'High ABV (> 6.0%)':
    //       setUrlTag(`&abv_gt=6`);
    //       break;
    //     case "Classic":
    //       setUrlTag(`&brewed_before=01-2010`);
    //       break
    //     default:
    //       setUrlTag()
    //       break;
    //   }
    // } else {
    //   setUrlTag()
    //   setBeerInfo(dataCopy)
    // }

  }


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
