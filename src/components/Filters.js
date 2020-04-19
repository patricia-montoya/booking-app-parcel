import React from 'react';
import DateFilter from './DateFilter';
import OptionsFilter from './OptionsFilter';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleDateChange(event) {
    const { filters, onFilterChange } = this.props;

    let payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  }

  handleOptionChange(event) {
    const { filters, onFilterChange } = this.props;

    let payload = filters;
    payload[event.target.name] = event.target.value;
    onFilterChange(payload);
  }

  render() {
    const { filters } = this.props;
    return (
      <nav className="navbar is-info" style={{ justifyContent: 'center' }}>
        <div className="navbar-item">
          <DateFilter
            date={filters.dateFrom}
            icon="sign-in-alt"
            onDateChange={this.handleDateChange}
            name="dateFrom"
          />
        </div>
        <div className="navbar-item">
          <DateFilter
            date={filters.dateTo}
            icon="sign-out-alt"
            onDateChange={this.handleDateChange}
            name="dateTo"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: 'Todos los países' },
              { value: 'Argentina', name: 'Argentina' },
              { value: 'Brasil', name: 'Brasil' },
              { value: 'Chile', name: 'Chile' },
              { value: 'Uruguay', name: 'Uruguay' },
            ]}
            selected={filters.country}
            icon="globe"
            onOptionChange={this.handleOptionChange}
            name="country"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: 'Cualquier precio' },
              { value: 1, name: '$' },
              { value: 2, name: '$$' },
              { value: 3, name: '$$$' },
              { value: 4, name: '$$$$' },
            ]}
            selected={filters.price}
            icon="dollar-sign"
            onOptionChange={this.handleOptionChange}
            name="price"
          />
        </div>
        <div className="navbar-item">
          <OptionsFilter
            options={[
              { value: undefined, name: 'Cualquier tamaño' },
              { value: 10, name: 'Hotel pequeño' },
              { value: 20, name: 'Hotel mediano' },
              { value: 30, name: 'Hotel grande' },
            ]}
            selected={filters.rooms}
            icon="bed"
            onOptionChange={this.handleOptionChange}
            name="rooms"
          />
        </div>
      </nav>
    );
  }
}

export default Filters;
