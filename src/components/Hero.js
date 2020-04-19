import React from 'react';

const priceToWords = (priceStr) => {
  const price = parseInt(priceStr);

  switch (price) {
    case 1:
      return 'Bajo';
    case 2:
      return 'Medio';
    case 3:
      return 'Alto';
    case 4:
      return 'De lujo';
    default:
      return '';
  }
};

const roomsToWords = (roomsStr) => {
  const rooms = parseInt(roomsStr);

  switch (rooms) {
    case 10:
      return 'Pequeño';
    case 20:
      return 'Mediano';
    case 30:
      return 'Grande';
    default:
      return '';
  }
};

const Hero = ({ filters }) => {
  const { dateFrom, dateTo, country, price, rooms } = filters;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  console.log(filters);
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            {dateFrom && 'Desde el '}
            {dateFrom && (
              <strong>{dateFrom.toLocaleDateString('es-CO', options)}</strong>
            )}
            {dateTo && ' hasta el '}
            {dateTo && (
              <strong>{dateTo.toLocaleDateString('es-CO', options)}</strong>
            )}
            {country && ' en '}
            {country && <strong>{country}</strong>}
            {price && ' de precio '}
            {price && <strong>{priceToWords(price)}</strong>}
            {rooms && ' de tamaño '}
            {rooms && <strong>{roomsToWords(rooms)}</strong>}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
