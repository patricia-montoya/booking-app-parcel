import React from 'react';

const Hero = ({ filters }) => {
  console.log(filters);
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Hoteles</h1>
          <h2 className="subtitle">
            <strong>{`${filters.dateFrom}`}</strong>
            hasta el
            <strong>{`${filters.dateTo} PENDIENTE!!!`}</strong>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
