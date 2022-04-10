/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom';
import { FiUsers } from 'react-icons/fi';

import logoMarvel from '../../assets/MarvelLogo1.svg';

import { Container, DevDiv } from './styled';


const Header: React.FC = () => (
  <Container>
    <img src={logoMarvel} alt="Marvel" />
    
      
    <div>
      <Link to="/characters">{/* link to main */}
        <FiUsers />
        Characters
      </Link>
            <figure> {/* play marveltheme */}
                <audio autoPlay >
                    <source src="/audio/MarvelTheme.mp3" />
                
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            </figure>
    <div>
        
      </div>
    </div>
    <DevDiv>
      <a href="https://github.com/snagzero">{/* link para meu github */}
        <img src="https://avatars.githubusercontent.com/u/68662867?v=4" alt="Zero" />{/* link da img no github */}
      </a>
    </DevDiv>
  </Container>
);

export default Header;
