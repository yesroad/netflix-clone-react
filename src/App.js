import React from 'react';
import Layout from './layout/Layout';
import MovieContainer from './containers/MovieContainer';
import BannerContainer from './containers/BannerContainer';

function App() {
  return (
    <>
      <Layout>
        <BannerContainer />
        <MovieContainer />
      </Layout>
    </>
  );
}

export default App;
