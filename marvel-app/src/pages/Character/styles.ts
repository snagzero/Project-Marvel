import styled, { css } from 'styled-components';

interface ThumbnailDTO {
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-content: start;

  div#about {
    
  width: 20%;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  }
`;

export const ContainerD = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-content: start;

  div#about {
  height: 500px;
  width: 20%;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  }
`;

export const Name = styled.div`
  display: flex;
  width: 30%;
  flex-wrap: wrap;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 10px;
  padding: 0 50px;
  border-radius: 10px;
  background-color: #f0131e;
  color: white;

`;

const urlImg = (props: ThumbnailDTO) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const Card = styled.div`
  height: 300px;
  width: 30%;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  transition: all 1.5s;
  h2,
  p {
    padding: 5px;
    text-align: center;
  }
  div#img {
    height: 100%;
    width: 100%;
    background: url(${urlImg}) no-repeat center;
    background-size: cover;
    transition: height 1s;
  }
  &:hover {
    div#img {

    }
    transform: scale(1.01, 1.01);
    -webkit-box-shadow:0px 0px 50px 8px rgb(0,0,0);
    box-shadow: 0px 0px 50px 8px rgb(0,0,0);
  }
`;

export const Img = styled.div`
  height: 200px;
  width: 100%;
  background: url(${urlImg}) no-repeat center;
  background-size: cover;
`;

export const ButtonBack = styled.div`
  background: white;
  color: #f0131e;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
  margin: 20px 100px;
  padding: 0 50px;
  border-radius: 10px;
  transition: background 0.3s;
  &:hover {
    background: #f0131e;
    color: white;
  };
`;

