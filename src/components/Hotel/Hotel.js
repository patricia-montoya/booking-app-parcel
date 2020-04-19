import React from 'react';
import HotelHeader from './HotelHeader';
import HotelContent from './HotelContent';
import HotelFooter from './HotelFooter';

const Hotel = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <HotelHeader source={data.photo} AltText={data.name} />
      <HotelContent
        name={data.name}
        description={data.description}
        city={data.city}
        country={data.country}
        rooms={data.rooms}
      />
      <HotelFooter />
    </div>
  );
};

export default Hotel;
