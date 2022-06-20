import React from 'react';
import './CardMoreInfo.scss';

const CardMoreInfo = ({ beerInfo }) => {
  const selectedBeer = beerInfo[0];

  //   console.log(selectedBeer);

  const foodPairing = selectedBeer.food_pairing;
  const paringArr = foodPairing.map((line) => <p>{line}</p>);

  const ingredients = selectedBeer.ingredients;
  const hops = ingredients.hops;
  const hopsArr = hops.map((hop) => (
    <p>
      {hop.name} : {hop.amount.value} {hop.amount.unit}
    </p>
  ));
  const malt = ingredients.malt;
  const maltArr = malt.map((malt) => (
    <p>
      {malt.name} : {malt.amount.value} {malt.amount.unit}
    </p>
  ));

  const fermentation = selectedBeer.method.fermentation.temp
  console.log(fermentation);

  const moreInfoJSX = (
    <div className="selectedBeer">
      <h2 className="selectedBeer__heading">{selectedBeer.name}</h2>
      <img className="selectedBeer__img" src={selectedBeer.image_url} alt="" />
      <p>{selectedBeer.description}</p>
      <p>{selectedBeer.tagline}</p>
      <h3>Best Food to pair with :</h3>
      <p>{paringArr}</p>
      <div className='selectedBeer__ingredients-headings'>
        <h3>Information for brewing</h3>
        <h4>ingredients :</h4>
      </div>
      <div className="selectedBeer__ingredients-contents">
        <div>
          <p>Hops :</p>
          <p>{hopsArr}</p>
        </div>
        <div>
          <p>Malt :</p>
          <p>{maltArr}</p>
        </div>
        <div>
        <p>Methods : </p>
        <p>fermentation : {fermentation.value} {fermentation.unit}</p>
        </div>
      </div>
      <p>Yeast : {ingredients.yeast} </p>
      <p>{selectedBeer.brewers_tips}</p>
    </div>
  );

  return moreInfoJSX;
};

export default CardMoreInfo;
