import React from 'react';
import './CardList.scss';

import Card from '../../components/Card/Card';
const CardList = (props) => {

const {searchedBeers} = props

  return (
    <div className='card-list'>
        <Card beersArr={searchedBeers}/>
    </div>
  );
};

export default CardList;
