import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { getByQuery } from 'utils/Backend_API';
import { useSearchParams } from 'react-router-dom';
import { MagnifyingGlass } from 'react-loader-spinner';
import { Box } from 'components/Box';
import { QueryMessage } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSerachParams] = useSearchParams();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const urlQuery = searchParams.get('query');

  useEffect(() => {
    if (urlQuery) {
      setQuery(urlQuery);
      return;
    }
    setQuery('');
  }, [urlQuery]);

  useEffect(() => {
    if (query === '') {
      setStatus('idle');
      setFilms([]);
      return;
    }
    setStatus('pending');
    getByQuery(query)
      .then(data => {
        setFilms(data);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setStatus('done');
      });
  }, [query]);

  const handleSearch = serachQuery => {
    setSerachParams({ query: serachQuery });
    setQuery(serachQuery);
  };

  return (
    <Box pl="20px">
      <SearchForm onSearch={handleSearch} />
      {films.length === 0 && status === 'done' ? (
        <QueryMessage>There are no movies found for your query</QueryMessage>
      ) : (
        <FilmList films={films} />
      )}
      {status === 'pending' && <MagnifyingGlass />}
    </Box>
  );
};

export default Movies;
