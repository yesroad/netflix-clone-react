import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import { instance, request } from '../api/netflix';

function BannerContainer() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getMovie = await instance.get(request.fetchOriginal);
      const random =
        getMovie.data.results[
          Math.floor(Math.random() * getMovie.data.results.length - 1)
        ];
      setBanner(random);
    }
    fetchData();
  }, []);

  return (
    <Banner
      poster={banner.backdrop_path}
      title={banner.title || banner.name || banner.original_name}
      overview={banner.overview}
    />
  );
}

export default BannerContainer;
