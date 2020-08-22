import React, { useState, useEffect } from 'react';
import { instance } from '../api/netflix';
import '../assets/styles/movie.scss';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Movie({ title, fetchUrl, verticalImg }) {
  const imgUrl = 'https://image.tmdb.org/t/p/original/';
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function fetchDatas() {
      const getMovies = await instance.get(fetchUrl);
      setMovies(getMovies.data.results);
      return getMovies;
    }
    fetchDatas();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) setTrailerUrl('');
    movieTrailer(movie.title || movie.name || movie.original_name)
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((e) => console.error(e));
  };

  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <article className="movie-area">
      <h3>{title}</h3>
      <aside className="movie-list">
        {movies.map(
          (movie) =>
            movie.backdrop_path && (
              <div
                key={movie.id}
                onClick={() => handleClick(movie)}
                className={`movie ${verticalImg && 'vertical_poster'}`}
              >
                <img
                  src={`${imgUrl}${
                    verticalImg ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title || movie.name || movie.original_name}
                />
                <div className="dim">
                  <strong>
                    {movie.title || movie.name || movie.original_name}
                  </strong>
                </div>
              </div>
            ),
        )}
      </aside>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </article>
  );
}

export default Movie;
