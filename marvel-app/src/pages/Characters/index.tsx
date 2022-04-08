import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown, FiSearch, FiCornerDownLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api, { authKey } from '../../services/api';

import { Container, Card, ButtonMore, InputLabel, } from './styles';

interface CharactersDTO {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };

}

const Characters: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [seach, setSeach] = useState('');

  const [characters, setCharacters] = useState<CharactersDTO[]>([]);

  useEffect(() => {
    async function getCharacters(): Promise<void> {
      try {
        const response = await api.get(`characters?${authKey}`);

        setCharacters(response.data.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    getCharacters();
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get(`characters?${authKey}`, {
        params: {
          offset,
        },
      });

      setCharacters([...characters, ...response.data.data.results]);
    } catch (err) {
      console.log('erro', err);
    }
  }, [characters]);

  const handleSeach = useCallback(async () => {
    try {
      const response = await api.get(`characters?${authKey}`, {
        params: {
          name: seach,
        },
      });
      setCharacters([...response.data.data.results, ...characters]);
      setSeach('');
    } catch (err) {
      console.log(err);
    }
  }, [seach, characters]);

  return (
    <>
      <InputLabel isFocused={isFocused} isFilled={isFilled}>
        <label
          htmlFor="input"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <datalist id="marvelsearch">


          </datalist>
          
          <FiSearch />
          <input
            id="input"
            type="search"
            list="marvelsearch"
            placeholder="Character Name"
            value={seach}
            onChange={(event) => setSeach(event.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSeach() : '')}
          />
          <FiCornerDownLeft id="enter" onClick={handleSeach} />
        </label>
      </InputLabel>

      <Container>
        {characters.map((character) => (
          <Card key={character.id} thumbnail={character.thumbnail}>
            <div id="img" />
            <h2>{character.name}</h2>
            <div>
                <Link to={character.description}>
                  <button>View</button>
                </Link>
                <button>Vote</button>
            </div>
            
          </Card>
        ))}
      </Container>
      <ButtonMore onClick={handleMore}>
        <FiChevronsDown size={20} />
        More
        <FiChevronsDown size={20} />
      </ButtonMore>
    </>
  );
};

export default Characters;
