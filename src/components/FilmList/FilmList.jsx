import { FilmListItem } from 'components/FilmListItem/FilmListItem';
import PropTypes from 'prop-types';
import { List, LisItem } from './FilmList.styled';

const FilmList = ({ films }) => {
  return (
    <List>
      {films.map(({ id, original_title }) => {
        return (
          <LisItem key={id}>
            <FilmListItem filmId={id} name={original_title} />
          </LisItem>
        );
      })}
    </List>
  );
};

FilmList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};

export default FilmList;
