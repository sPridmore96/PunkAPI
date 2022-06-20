import React from 'react';
import './CardList.scss';

import Card from '../../components/Card/Card';
const CardList = (props) => {

const {beerInfo, showNoBeers} = props

  return (
    <div className='card-list'>
        <Card showNoBeers={showNoBeers} beersArr={beerInfo}/>
    </div>
  );
};

export default CardList;
