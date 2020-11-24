import styled from 'styled-components';
import { Link } from 'react-router-dom';
import usuarioSvg from '../../Assets/usuario.svg';


export const Menu = styled.header`
  position: fixed;

  box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
  background-color: ${({ theme }) => theme.primary}; 
  color: ${({theme}) => theme.secondary};
  
  max-width: 100%;
  width: 100%;
  padding: .5rem 0;
  z-index: 100;
`;

export const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuLogo = styled(Link)`
  padding:  0.5rem 0;
`

export const MenuLogin = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({theme}) => theme.secondary};

  &::after {
    content: '';
    display: inline-block;
    background-color: #333;
    width: 14px;
    height: 17px;
    background: url(${usuarioSvg})no-repeat center center /cover;
  }
`;