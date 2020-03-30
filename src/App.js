import React from 'react';
import 'bulma';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Hero from './components/Hero';
import { today } from './data/data';

const App = () => {
  const filters = {
    dateFrom: today,
    dateTo: new Date(today.valueOf() + 86400000),
    country: '',
    price: 0,
    rooms: 0,
  };

  return (
    <div>
      <Hero filters={filters} />
    </div>
  );
};

export default App;
