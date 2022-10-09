import { useLocation } from 'react-router-dom';
import { Link } from './FilmListItem.styled';
import PropTypes from 'prop-types';

export const FilmListItem = ({ filmId, name }) => {
  const location = useLocation();
  return (
    <Link to={`/movies/${filmId}`} state={{ from: location }}>
      {name}
    </Link>
  );
};

FilmListItem.propTypes = {
  filmId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
