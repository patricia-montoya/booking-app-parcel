import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero';
import Filters from './components/Filters';
import { today } from './data/data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: {
        dateFrom: today,
        dateTo: new Date(today.valueOf() + 86400000),
        country: '',
        price: 0,
        rooms: 0,
      },
    };
  }

  render() {
    const { filters } = this.state;
    return (
      <div>
        <Hero filters={filters} />
        <Filters filters={filters} />
      </div>
    );
  }
}

export default App;
