import React, { useState, useEffect } from 'react';
import { instance } from '../api/netflix';
import '../assets/styles/movie.scss';

function Movie({ title, fetchUrl, verticalImg }) {
  const imgUrl = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchDatas() {
      const getMovies = await instance.get(fetchUrl);
      setMovies(getMovies.data.results);
      return getMovies;
    }
    fetchDatas();
  }, [fetchUrl]);

  return (
    <article className="movie-area">
      <h3>{title}</h3>
      <aside className="movie-list">
        {movies.map((movie) => (
          <img
            className={verticalImg && 'vertical_poster'}
            key={movie.id}
            src={`${imgUrl}${
              verticalImg ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title || movie.name || movie.original_name}
          />
        ))}
      </aside>
    </article>
  );
}

export default Movie;
