import styled from 'styled-components';

interface ThumbnailData { 
    thumbnail: {
    path: string;
    extension: string;
    };
}

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

const urlImg = (props: ThumbnailData) => 
    `${props.thumbnail.path}.${props.thumbnail.extension}`

export const Card = styled.div`
    background: grey;
    height: 450px;
    width: 300px;
    margin: 10px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    h2, p {
        padding: 10px;
        text-align: center;
    }

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 1.5s;

    }
    &:hover {
        div#img {
            height: 200px;
        }
    }
    
    .btn-view{
        padding: 10px;
        margin-top: 80px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: black;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
    }

    .vote{
        padding: 10px;
        border-radius: 15px;
        width: 120px;
        background-color: transparent;
        color: black;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const ButtonMore = styled.div`
    background: grey;
    height: 40px;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    cursor: pointer;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin: 20px auto;
    padding: 0 50px;
    border-radius: 15px;
    transition: all 0.3s;

    &:hover {
        background: red;
    }

    svg {
        margin: 0 8px;
    }
`;
