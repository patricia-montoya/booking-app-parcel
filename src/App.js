import React from 'react';
import moment from 'moment';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero';
import Filters from './components/Filters/Filters';
import Hotels from './components/Hotel/Hotels';
import { today, hotelsData } from './data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: '',
        price: '',
        rooms: '',
      },
      hotels: hotelsData,
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.filtersHotel = this.filtersHotel.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload,
    });
  }

  filtersHotel(hotel) {
    const { filters } = this.state;
    if (
      (filters.dateFrom &&
        moment(filters.dateFrom).isBefore(hotel.availabilityFrom)) ||
      (filters.dateTo &&
        moment(filters.dateTo).isAfter(hotel.availabilityTo)) ||
      (filters.country && filters.country !== hotel.country) ||
      (filters.price && filters.price !== hotel.price) ||
      (filters.rooms === 10 && hotel.rooms > 10) ||
      (filters.rooms === 20 && (hotel.rooms <= 10 || hotel.rooms > 20)) ||
      (filters.rooms === 30 && hotel.rooms <= 20)
    )
      return false;

    return true;
  }

  render() {
    const { filters, hotels } = this.state;
    return (
      <div>
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
        <Hotels data={hotels.filter(this.filtersHotel)} />
      </div>
    );
  }
}

export default App;
