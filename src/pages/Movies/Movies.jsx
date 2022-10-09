import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { getByQuery } from 'utils/Backend_API';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const urlQuery = searchParams.get('query');

  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
      console.log('the query is in url');
    } else {
      setQuery('');
    }
    if (query === '') {
      return;
    }
    getByQuery(query).then(data => {
      setFilms(data);
    });
  }, [query, urlQuery]);

  const handleSearch = serachQuery => {
    setSerachParams({ query: serachQuery });
    setQuery(serachQuery);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {films.length === 0 && query !== '' ? (
        <p>There are no movies found for your query</p>
      ) : (
        query !== '' && <FilmList films={films} />
      )}
    </div>
  );
};

export default Movies;
