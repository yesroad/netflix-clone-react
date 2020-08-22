import React from 'react';
import { request } from '../api/netflix';
import Movie from '../components/Movie';

function MovieContainer() {
  return (
    <>
      <Movie
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchOriginal}
        verticalImg={true}
      />
      <Movie title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Movie title="Trend Now" fetchUrl={request.fetchTrend} />
      <Movie title="Action" fetchUrl={request.fetchAction} />
      <Movie title="Comedy" fetchUrl={request.fetchComedy} />
      <Movie title="Horror" fetchUrl={request.fetchHorror} />
      <Movie title="Romance" fetchUrl={request.fetchRomance} />
    </>
  );
}

export default MovieContainer;
