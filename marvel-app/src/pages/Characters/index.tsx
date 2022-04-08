import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronsDown, FiSearch, FiCornerDownLeft, FiChevronsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api, { authKey } from '../../services/api';

import { Container, Card, ButtonMore, ButtonVote, ButtonView, InputLabel, } from './styles';

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

  const [search, setSearch] = useState('');

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
// para carregar mais chars
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

//para voto
  const handleVote = useCallback(async () => {
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

// para description
  const handleView = useCallback(async () => {
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
  
// para search
  const handleSearch = useCallback(async () => {
    try {
      const response = await api.get(`characters?nameStartsWith=${search}&${authKey}`, {
        params: {
          name: search,
        },
      });
      setCharacters([...response.data.data.results, ...characters]);
      setSearch('');
    } catch (err) {
      console.log(err);
    }
  }, [search, characters]);

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
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : '')}
          />
          <FiCornerDownLeft id="enter" onClick={handleSearch} />
        </label>
      </InputLabel>

      <Container>
        {characters.map((character) => (
          <Card key={character.id} thumbnail={character.thumbnail}>
            <div id="img" />
            <h2>{character.name}</h2>
            <div id="button">
            <ButtonVote onClick={handleVote}>
            <FiChevronsUp size={20} />
              Vote
            <FiChevronsUp size={20} />
            </ButtonVote>
            <ButtonView onClick={handleView}>
              View
            </ButtonView>
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
