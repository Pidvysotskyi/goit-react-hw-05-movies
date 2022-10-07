import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'utils/Backend_API';

const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(movie => setMovieDetails(movie));
  }, [movieId]);

  return (
    <>
      <div>
        <img
          src={`${BASE_IMG_URL}${movieDetails.poster_path}` || null}
          alt={movieDetails.tagline}
          width="300"
        />
        <div>
          <h2>
            {movieDetails.original_title} / {movieDetails.release_date}
          </h2>
          <p>
            <b>User score:</b>
            {Math.floor(Number(movieDetails.vote_average) * 10)}%
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p></p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
