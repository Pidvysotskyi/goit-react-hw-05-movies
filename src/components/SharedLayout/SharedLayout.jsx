import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Box } from 'components/Box';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Box pl="20px" pr="20px">
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
