import { useState, useEffect } from 'react';
import { getTrending } from 'utils/Backend_API';
import FilmList from 'components/FilmList/FilmList';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending().then(data => {
      setTrending(data);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <FilmList films={trending} />
    </div>
  );
};

export default Home;
