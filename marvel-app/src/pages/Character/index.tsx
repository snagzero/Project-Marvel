import React, { useEffect, useState } from 'react';
import { FiChevronsLeft } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import api, { authKey } from '../../services/api';

import { Container, Card, ButtonBack, Name } from './styles';

interface CharactersDTO {
  id: Number;
  name: String;
  description: String;
  thumbnail: {
    path: string;
    extension: string; 
};
}

const Character: React.FC = () => {
  let { id }: any = useParams();

  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState<CharactersDTO[]>([]);

  useEffect(() => {
    async function getCharacter(): Promise<void> {
      try {
        const response = await api.get(`characters/${id}?${authKey}`);

        setCharacter(response.data.data.results);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacter();
  }, []);

  return (
    <>
      {loading ? (
        'Carregando...'
      ) : (
        <Name>
          
            <h1>{character[0]?.name}</h1>

        </Name>

      )}
      <Container>
        {character.map((character) => (
          <Card thumbnail={character.thumbnail}>
            <div id="img" />
          </Card>
        ))}
        <div id="about">
          <h3>{character[0]?.description}</h3>
        </div>
      </Container>

      <Link to="/characters">
      <ButtonBack>
        <FiChevronsLeft size={20} />
        Back
        <FiChevronsLeft size={20} />
      </ButtonBack>
      </Link>
    </>

    
  );
  
};

export default Character;