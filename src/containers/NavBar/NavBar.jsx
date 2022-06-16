import React from 'react';
import './NavBar.scss';
import Form from '../../components/Form/Form';

const NavBar = (props) => {
  const { searchTerm, handleInput, handleCheckBox,  } = props;

  return (
    <div className="nav">
      <h2>Explore?</h2>
      <Form
        handleCheckBox={handleCheckBox}
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
    </div>
  );
};

export default NavBar;
