import React from 'react';
import './CheckBoxes.scss';



const RadioButton = (props) => {
  const { argument, handleCheckBox, value} = props;



  return (
    <>
      <label htmlFor={argument}>{argument}</label>
      <input onChange={handleCheckBox} id={argument} value={value} name="CheckBox" type="checkbox" />
    </>
  );
};

export default RadioButton;
