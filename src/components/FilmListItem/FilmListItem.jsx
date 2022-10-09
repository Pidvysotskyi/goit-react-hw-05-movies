import { NavLink, useLocation } from 'react-router-dom';

export const FilmListItem = ({ filmId, name }) => {
  const location = useLocation();
  return (
    <NavLink to={`/movies/${filmId}`} state={{ from: location }}>
      {name}
    </NavLink>
  );
};
