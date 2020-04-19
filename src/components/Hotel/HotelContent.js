import React from 'react';
import PropTypes from 'prop-types';
import HotelTags from './HotelTags';

const HotelContent = ({ name, description, city, country, rooms }) => {
  return (
    <div className="card-content">
      <p className="title is-4">{name}</p>
      <p>{description}</p>
      <HotelTags city={city} country={country} rooms={rooms} />
    </div>
  );
};

HotelContent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
};

export default HotelContent;
