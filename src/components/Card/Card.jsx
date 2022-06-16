import React from 'react';
import './Card.scss';

const Card = ({beersArr}) => {

  const beerJSX = beersArr.map((beer, index) => {
    index = beersArr.indexOf(beer)
    return (
      <div key={index} className="card">
        <img className='card__img' src={beer.image_url} alt="" />
        <h2>{beer.name}</h2>
        <span>{beer.tagline}</span>
        </div>
    );
  });

  return beerJSX
};

export default Card;
