import React from 'react';
import './CardList.scss';

import Card from '../../components/Card/Card';
const CardList = (props) => {

const {userSearch} = props

  return (
    <div className='card-list'>
        <Card beersArr={userSearch}/>
    </div>
  );
};

export default CardList;
