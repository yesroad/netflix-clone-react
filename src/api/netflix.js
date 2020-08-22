import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = '9dc259f0a4bdd63fa4288ba7e347c32e';

export const request = {
  fetchOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrend: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
