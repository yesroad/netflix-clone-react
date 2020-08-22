import React from 'react';
import Header from './components/Header';
import './assets/styles/common/reset.scss';
import Template from './layout/Template';
import Container from './components/Container';

function App() {
  return (
    <>
      <Template>
        <Header />
        <Container />
      </Template>
    </>
  );
}

export default App;
