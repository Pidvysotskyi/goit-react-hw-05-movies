import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: darkgray;
  padding: 6px;
  border: solid 1px black;
  border-radius: 2px;
  margin-right: 10px;
  margin-bottom: 10px;

  &.active {
    color: white;
    background-color: black;
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: white;
    background-color: darkgray;
  }
`;
