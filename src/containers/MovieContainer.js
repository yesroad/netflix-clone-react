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
      <Movie title="NETFLIX ORIGINALS2" fetchUrl={request.fetchTopRated} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchTrend} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchAction} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchComedy} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchHorror} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchRomance} />
      <Movie title="NETFLIX ORIGINALS3" fetchUrl={request.fetchDocumentary} />
    </>
  );
}

export default MovieContainer;
