import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { featchSearchFilm } from '../service/Api';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovie] = useState(null);
  const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState(query);

  useEffect(() => {
    if (query === '') return;
    setMovie(null);
    setTotalRezMovie(null);
    setShowLoading(true);
    async function getMovieSearch() {
      try {
        const getMovieInf = await featchSearchFilm(query);
        setMovie(getMovieInf.results);
        setTotalRezMovie(getMovieInf.total_results);
        setShowLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieSearch();
  }, [query]);

  const handleInputChange = e => {
    setInputSearch(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setSearchParams({});
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const queryNormalized = form.query.value.toLowerCase().trim();
    console.log(queryNormalized);

    setSearchParams({ query: queryNormalized });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Enter movie name"
          style={{
            fontSize: 14,
            color: '000000',
            marginRight: 16,
          }}
        />

        <button
          type="submit"
          style={{
            fontSize: 14,
          }}
        >
          Search
        </button>
      </form>

      {showLoading && <div>Loading...</div>}
      {movies && <MoviesList movies={movies} />}

      {totalRezultMovie === 0 && <div>Not found movies</div>}
    </>
  );
};

export default Movies;
