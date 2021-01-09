import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Container from './Components/Container/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);
