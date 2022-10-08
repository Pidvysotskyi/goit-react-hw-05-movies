import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'utils/Backend_API';
import { BASE_IMG_URL } from 'utils/baseImageUrl';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(movie => {
      setCast(movie.cast);
    });
  }, [movieId]);
  return (
    <ul>
      {cast.map(({ profile_path, name, original_name, character, cast_id }) => {
        return (
          <li key={cast_id}>
            {profile_path ? (
              <img src={BASE_IMG_URL + profile_path} alt={name} width="150" />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                alt={name}
                width="150"
              />
            )}

            <p>{original_name}</p>
            <p>
              <span>Character: </span>
              {character}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
