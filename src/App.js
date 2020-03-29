import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  return (
    <h1 className="title is-1">
      <FontAwesomeIcon icon={faHome} />
      ¡Holi!
    </h1>
  );
};

export default App;
