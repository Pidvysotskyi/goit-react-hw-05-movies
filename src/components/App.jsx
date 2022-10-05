import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Products } from '../pages/Products/Products';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductDetails } from '../pages/ProductDetails/ProductDetails';
import styled from 'styled-components';
import { Reviews } from './Reviews/Reviews';
import { Mission } from './Mission/Mission';
import { Team } from './Team/Team';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
