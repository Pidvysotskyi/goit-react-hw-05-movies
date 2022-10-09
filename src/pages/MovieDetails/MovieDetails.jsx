import { useEffect, useState } from 'react';
import { Outlet, useParams, NavLink, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'utils/Backend_API';
import { BASE_IMG_URL } from 'utils/baseImageUrl';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [posterPath, setPosterPath] = useState('');
  const [tagLine, setTagLine] = useState({});
  const [originalTitle, setOriginalTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [userScore, setUserScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState('');

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setOriginalTitle(movie.original_title);
      setReleaseDate(movie.release_date.slice(0, 4));
      setPosterPath(BASE_IMG_URL + movie.poster_path);
      setTagLine(movie.tagline);
      setUserScore(Math.floor(Number(movie.vote_average) * 10));
      setGenres(movie.genres.map(genre => genre.name).join(', '));
      setOverview(movie.overview);
    });
  }, [movieId]);

  console.log(location.state.from);

  return (
    <>
      <NavLink to={location.state.from}>Go back</NavLink>
      <div>
        <img src={posterPath} alt={tagLine} width="300" />
        <div>
          <h2>
            {originalTitle} / {releaseDate}
          </h2>
          <p>
            <b>User score:</b>
            {userScore}%
          </p>
          <h3>Overview</h3>
          {overview}
          <h4>Genres</h4>
          <p>{genres}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <NavLink to="cast" state={{ from: location.state.from }}>
          cast
        </NavLink>
        <NavLink to="reviews" state={{ from: location.state.from }}>
          reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
