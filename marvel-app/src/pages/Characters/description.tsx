import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Characters: React.FC = () => {
    useEffect(() => {
        api
        .get('/character')
        .then(response => console.log(response.data.data))
        .catch(err => console.log(err));
    }, []);

    return <h1>Description</h1>;
};

export default Description;