import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
