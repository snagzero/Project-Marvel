/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiUser,
  FiUsers,
} from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo1.svg';

import { Container, DevDiv } from './styled';

const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />

    <div>
      <Link to="/characters">
        <FiUsers />
        Characters
      </Link>
      <Link to="/description">
        <FiUser />
        Description
      </Link>
    </div>
    <DevDiv>
      <a href="https://github.com/snagzero">
        <img src="https://avatars.githubusercontent.com/u/68662867?v=4" alt="Zero" />
      </a>
    </DevDiv>
  </Container>
);

export default Header;
