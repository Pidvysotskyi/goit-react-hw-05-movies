import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: blue;
  padding: 14px;
  border: solid 1px darkblue;
  border-radius: 4px;
  margin-right: 20px;

  &.active {
    color: white;
    background-color: darkblue;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: grey;
    background-color: blue;
  }
`;
