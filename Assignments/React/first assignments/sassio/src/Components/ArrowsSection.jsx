import React from 'react';

export default function ArrowsSection(props) {
  const { arrowWestClass, arrowEastClass } = props;

  return (
    <div className="row m-5 row-phone row-tablet">
      <div className="arrows">
        <span className={`material-symbols-outlined arrow ${arrowWestClass}`}>west</span>
        <span className={`material-symbols-outlined arrow ${arrowEastClass}`}>east</span>
      </div>
    </div>
  );
}