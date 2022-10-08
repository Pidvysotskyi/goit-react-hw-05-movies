import { FilmListItem } from 'components/FilmListItem/FilmListItem';

const FilmList = ({ films }) => {
  return (
    <ul>
      {films.map(({ id, original_title }) => {
        return (
          <li key={id}>
            <FilmListItem filmId={id} name={original_title} />
          </li>
        );
      })}
    </ul>
  );
};

export default FilmList;
