import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <>
      <div>
        <p>This is Movie Details</p>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
