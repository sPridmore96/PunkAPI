import React from 'react';
import './Card.scss';

const Card = ({ beersArr, showNoBeers }) => {
  const beerJSX = beersArr.map((beer, index) => {
    index = beersArr.indexOf(beer);
    return (
      <div id={index} key={index} className="card">
        <img className="card__img" src={beer.image_url} alt="" />
        <h2>{beer.name}</h2>
        <span>{beer.tagline}</span>
        <p>abv :{beer.abv}</p>
        <span>ph :{beer.ph}</span>
      </div>
    );
  });

  const noBeers = (
    <div>
      <h2>No beers</h2>
      <p>
        There are no beers that fit this
        <br />
        criteria <br />
        on this page!
      </p>
    </div>
  );

  return showNoBeers ? beerJSX : noBeers;
};

export default Card;
