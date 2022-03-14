const API_KEY = "abadc0a8d1f1e9e3c8991e3597bc8f04";

const requests = {
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchSearchedQuery: `/search/multi?api_key=${API_KEY}&language=en-US&query=`,
  fetchGenreMovieList: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchGenreMovie: `/discover/movie?api_key=${API_KEY}&with_genres=`,
  fetchGenreShowsList: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
  fetchGenreShows: `/discover/tv?api_key=${API_KEY}&with_genres=`,
  // fetchMovieDetails: `?api_key=${API_KEY}&append_to_response=credits,images,recommendations,release_dates,reviews,similar,videos,watch/providers&language=en-US`,

  // testing

  fetchMovieData: `?api_key=${API_KEY}&language=en-US&append_to_response=images&include_image_language=null,en`,
  fetchTVData: `?api_key=${API_KEY}&language=en-US&append_to_response=images&include_image_language=null,en`,

  fetchTVShowDetails: `?api_key=${API_KEY}&append_to_response=credits,recommendations,content_ratings,reviews,similar,videos,watch/providers,images&include_image_language=null,en&language=en-US`,
  fetchTVSeasons: `?api_key=${API_KEY}&append_to_response=season/`,
  fetchProviders: `?api_key=${API_KEY}&append_to_response=watch/providers`,
  fetchMovieDetails: `?api_key=${API_KEY}&append_to_response=credits,recommendations,release_dates,reviews,similar,videos,watch/providers,images&include_image_language=null,en&language=en-US`,

  // order
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTopRatedTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNewArrivals: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
};

export default requests;
