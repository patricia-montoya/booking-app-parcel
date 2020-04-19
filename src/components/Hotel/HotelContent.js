import React from 'react';
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

export default HotelContent;
