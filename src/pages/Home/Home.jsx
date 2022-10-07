import { useState, useEffect } from 'react';
import { getTrending } from 'utils/Backend_API';
import { TrendingListItem } from 'components/TrendingListItem/TrendingListItem';

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
      <ul>
        {trending.map(({ id, original_title }) => (
          <li key={id}>
            <TrendingListItem filmId={id} name={original_title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
