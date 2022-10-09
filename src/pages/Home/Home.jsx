import { useState, useEffect } from 'react';
import { getTrending } from 'utils/Backend_API';
import FilmList from 'components/FilmList/FilmList';
import { Box } from 'components/Box';
import { Title } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setTrending(data);
    });
  }, []);

  return (
    <Box pl="20px">
      <Title>Trending today</Title>
      <FilmList films={trending} />
    </Box>
  );
};

export default Home;
