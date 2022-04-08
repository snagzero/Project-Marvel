import axios from 'axios';
import md5 from 'md5';

const publicKey = '2051c49ae1e4450974e8223d31101b24';

const privateKey = 'f7d753bc12f7febd2eeef36d696653698639f0b8';

const time = Number(new Date());

const hash = publicKey && privateKey ? md5(time + privateKey + publicKey) : '';

export const authKey = `&ts=${time}&apikey=${publicKey}&hash=${hash}`;

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
});

export default api;
