import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

interface responseData {
    name: string;
    id: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
}

const Characters: React.FC = () => {
    const [characters, setCharacters]= useState<responseData[]>([]);
    
    useEffect(() => {
        api
            .get('/characters')
            .then(response => {
                setCharacters(response.data.data.results);
                console.log(characters);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <h1>List of Characters</h1>
            <ul>
                {characters.map(character => {
                    return (
                    <li key={character.id}>
                        <img
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                            alt=''
                        />
                        <span className="name">{character.name}</span>
                        <span className="description">{character.description}</span>
                    </li>
                    )
                })}
            </ul>

        </Container>
    );
};

export default Characters;