import React from 'react';
import Hotel from './Hotel';

class Hotels extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { data } = this.props;
    return data ? (
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
  }
}

export default Hotels;
