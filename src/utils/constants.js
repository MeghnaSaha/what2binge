const OMDB_API_KEY = 'e4b4581b';

export const MOVIE_SEARCH = (searchTerm) => "https://www.omdbapi.com/?s=" + searchTerm + "&apikey=" + OMDB_API_KEY;