import React from 'react';
import moment from 'moment';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero';
import Filters from './components/Filters';
import { today, hotelsData } from './data/data';

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
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload,
    });
  }

  render() {
    const { filters } = this.state;
    return (
      <div>
        <Hero filters={filters} />
        <Filters filters={filters} onFilterChange={this.handleFilterChange} />
      </div>
    );
  }
}

export default App;
