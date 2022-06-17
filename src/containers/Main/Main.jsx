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
  const [options, setOptions] = useState([]);
  const [isAcidic, setIsAcidic] = useState();
  const [urlState, setUrlState] = useState(`https://api.punkapi.com/v2/beers`);


  
  

  useEffect(() => {
    const getBeerInfo = async () => {
      let url = urlState
      console.log(url);
      const res = await fetch(url);
      const data = await res.json();
      setBeerInfo(data);
    }

    getBeerInfo();
  }, [urlState]);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
     setSearchTerm(cleanInput);
  };

// const [options, setOptions] = useState([])
  const handleOptionsFilter = () => {
    


  }
  

  // const handleCheckBox = (event) => {
  //   const checked = event.target.checked;
  //   const id = event.target.id;

  //   selectedID.push(id);
  //   console.log(selectedID);

  //   if (checked) {
  //     switch (id) {
  //       case 'Acidic (ph < 4)':
  //         setIsAcidic(checked);
  //         const lowPH = beerInfo.filter((beer) => beer.ph < 4);
  //         setBeerInfo(lowPH);
  //         break;
  //       case 'High ABV (> 6.0%)':
  //         setUrlTag(`&abv_gt=6`);
  //         break;
  //       case 'Classic':
  //         setUrlTag(`&brewed_before=01-2010`);
  //         break;
  //       default:
  //         setUrlTag();
  //         break;
  //     }
  //     if (id === 'Acidic (ph < 4)') {
  //     }
  //   } else {
  //     setUrlTag();
  //     setBeerInfo(dataCopy);
  //   }
  // };

  return (
    <div className="main">
      <h2 className="main__header">Punk API</h2>
      <div className="main__content">
        <NavBar
          // handleCheckBox={handleCheckBox}
          searchTerm={searchTerm}
          handleInput={handleInput}
        />
        <CardList beerInfo={beerInfo} />
      </div>
    </div>
  );
};

export default Main;
