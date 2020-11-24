import React from 'react';
import { ReactComponent as Dogs } from '../../Assets/dogs.svg';
import { Menu, MenuWrapper, MenuLogo, MenuLogin } from './styles';

const Header = () => {
  return (
    <Menu>
      <MenuWrapper className="container">
        <MenuLogo to="/">
          <Dogs />
        </MenuLogo>

        <MenuLogin to="/Login">
          Login / Criar
        </MenuLogin>
      </MenuWrapper>
    </Menu>
  );
};

export default Header;
