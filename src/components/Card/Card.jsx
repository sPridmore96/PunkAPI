import React from 'react';
import './Card.scss';

const Card = ({beersArr}) => {

  const beerJSX = beersArr.map((beer, index) => {
    index = beersArr.indexOf(beer)
    return (
      <div id={index} key={index} className="card">
        <img className='card__img' src={beer.image_url} alt="" />
        <h2>{beer.name}</h2>
        <span>{beer.tagline}</span>
        <p>abv :{beer.abv}</p>
        <span>ph :{beer.ph}</span>
        </div>
    );
  });

  return beerJSX
};

export default Card;
