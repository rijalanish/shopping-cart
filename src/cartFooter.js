import React from 'react';

export const CartFooter = ({year ='2016'}) => {

    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">&copy; {year}</a>
      </nav>      
    );
  }
