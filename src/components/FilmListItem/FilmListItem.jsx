import { NavLink } from 'react-router-dom';

export const FilmListItem = ({ filmId, name }) => {
  return <NavLink to={`${filmId}`}>{name}</NavLink>;
};
