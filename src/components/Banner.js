import React from 'react';
import '../assets/styles/banner.scss';

function Banner({ poster, title, overview }) {
  const imgUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <article
      className="banner-area"
      style={{ backgroundImage: `url(${imgUrl}${poster})` }}
    >
      <aside className="banner-title">
        <h3>{title}</h3>
        <div className="btn-area">
          <button>Play</button>
          <button>My List</button>
        </div>
        <p>{overview}</p>
      </aside>
    </article>
  );
}

export default Banner;
