import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <Box pl="20px" pr="20px">
      <Header />
      <Outlet />
    </Box>
  );
};
