import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

export const Header = () => {
  return (
    <Box as="header" display="flex" alignItems="center" justifyContent="start">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </Box>
  );
};
