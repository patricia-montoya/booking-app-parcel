import React from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel';

const Hotels = ({ data }) => {
  return data.length ? (
    <section className="section" style={{ marginTop: '3em' }}>
      <div className="container">
        <div className="columns is-multiline">
          {data.map((hotel) => (
            <div key={hotel.slug} className="column is-one-third">
              <Hotel data={hotel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : (
    <article className="message is-warning">
      <div className="message-body">
        No se han encontrado hoteles que coincidan con los parámetros de
        búsqueda.
      </div>
    </article>
  );
};

Hotels.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Hotels;
