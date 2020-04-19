import React from 'react';
import PropTypes from 'prop-types';

const HotelHeader = ({ source, AltText }) => {
  return (
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={source} alt={AltText} />
        <h1>{source}</h1>
      </figure>
    </div>
  );
};

HotelHeader.propTypes = {
  source: PropTypes.string.isRequired,
  AltText: PropTypes.string.isRequired,
};

export default HotelHeader;
