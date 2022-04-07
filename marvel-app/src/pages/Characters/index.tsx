import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronsDown } from 'react-icons/fi'
import api from '../../services/api';
import { Container, CardList, Card, ButtonMore } from './styles';

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

    const handleMore = useCallback(async () => {
        try { 
            const offset = characters.length;
            const response = await api.get('characters', {
                params:{
                    offset, 
                },

            });

            setCharacters([... characters, ... response.data.data.results]);
        }
        catch (err) {
            console.log(err);
        }
    }, [characters]);

    return (
        <Container>
            <h1>List of Characters</h1>
            <CardList>
                

                {characters.map(character =>{
                    return (
                        <Card key={character.id} thumbnail={character.thumbnail}>
                            <div id="img" />
                            <h2>{character.name}</h2>
                            <button type="button" name="button" class="vote">View</button>
                            <button type="button" name="button" class="btn-view">View</button>
                        </Card>
                        
                    )

                })};
            </CardList>

            <ButtonMore onClick={handleMore}>
                <FiChevronsDown size={20} />
                    More
                <FiChevronsDown size={20} />
                
            </ButtonMore>

        </Container>
    );
};

export default Characters;