import { Box } from 'components/Box';
import { NavigationLink } from './Header.styled';

export const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      justifyContent="start"
      p="10px"
      borderBottom="solid 2px darkblue"
      fontWeight="700"
      fontSize="24px"
      mb="20px"
    >
      <NavigationLink to="/" end>
        Home
      </NavigationLink>
      <NavigationLink to="/movies">Movies</NavigationLink>
    </Box>
  );
};
