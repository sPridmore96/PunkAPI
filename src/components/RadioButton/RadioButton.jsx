import React from 'react';
import './RadioButton.scss';

import { Link } from 'react-router-dom';

const RadioButton = (props) => {
  const { name, handleRadio } = props;
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input onChange={handleRadio} id={name} name="handleRadio" type="radio" />
    </>
  );
};

export default RadioButton;
