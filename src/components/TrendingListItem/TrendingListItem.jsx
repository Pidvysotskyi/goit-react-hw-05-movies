import { NavLink } from 'react-router-dom';

export const TrendingListItem = ({ filmId, name }) => {
  return <NavLink to={`/movies/${filmId}`}>{name}</NavLink>;
};
