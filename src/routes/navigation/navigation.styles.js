import styled from 'styled-components';
import { Link } from 'react-router-dom';

// @import url('https://fonts.googleapis.com/css2?family=Skranji&display=swap');

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  // background-color: turquoise;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 300px;
  padding: 20px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  // color: white;
  // font-weight: 500;
`;

export const Logo = styled.span`
  font-family: 'Skranji', cursive;
  font-size: 30px;
`;
