import React from 'react';
import './CardList.scss';

import Card from '../../components/Card/Card';
const CardList = (props) => {

const {beerInfo} = props

  return (
    <div className='card-list'>
        <Card beersArr={beerInfo}/>
    </div>
  );
};

export default CardList;
