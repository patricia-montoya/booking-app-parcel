import React from 'react';

const handleClick = () => {
  alert('No implementamos esto aún :(');
};

const HotelFooter = () => {
  return (
    <div className="card-footer">
      <a
        href="#!"
        className="card-footer-item has-background-primary has-text-white has-text-weight-bold"
        onClick={handleClick}
      >
        Reservar
      </a>
    </div>
  );
};

export default HotelFooter;
