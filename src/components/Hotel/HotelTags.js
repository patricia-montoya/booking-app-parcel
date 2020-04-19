import React from 'react';

const HotelTags = ({ city, country, rooms }) => {
  return (
    <div
      className="field is-grouped is-grouped-multiline"
      style={{ marginTop: '1em' }}
    >
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info">
            <i className="fas fa-map-marker" />
          </span>
          <span className="tag is-medium">{`${city}, ${country}`}</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-medium is-info">
            <i className="fas fa-bed" />
          </span>
          <span className="tag is-medium">{`${rooms} Habitaciones`}</span>
        </div>
      </div>
      <div className="control">
        <div className="tags">
          <span className="tag is-medium is-info">
            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em' }} />
            <i className="fas fa-dollar-sign" style={{ margin: '0 .125em' }} />
            <i
              className="fas fa-dollar-sign"
              style={{ margin: '0 .125em', opacity: '.25' }}
            />
            <i
              className="fas fa-dollar-sign"
              style={{ margin: '0 .125em', opacity: '.25' }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelTags;
