import React from 'react';
import Layout from './layout/Layout';
import Header from './components/Header';
import MovieContainer from './containers/MovieContainer';
import BannerContainer from './containers/BannerContainer';

function App() {
  return (
    <>
      <Header />
      <Layout>
        <BannerContainer />
        <MovieContainer />
      </Layout>
    </>
  );
}

export default App;
