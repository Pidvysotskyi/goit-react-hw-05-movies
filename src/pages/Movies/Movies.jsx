import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { getByQuery } from 'utils/Backend_API';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') {
      return;
    }
    getByQuery(query).then(data => {
      setFilms(data);
    });
  }, [query]);

  const handleSearch = serachQuery => {
    setSerachParams({ query: serachQuery });
    setQuery(serachQuery);
    console.log(searchParams.get('query'));
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {films.length !== 0 || query === '' ? (
        <FilmList films={films} />
      ) : (
        <p>There are no movies found for your query</p>
      )}
    </div>
  );
};

export default Movies;
