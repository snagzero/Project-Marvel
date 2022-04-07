import axios from 'axios';
import md5 from 'md5';


const ts = Number(new Date());
const public_key = '2051c49ae1e4450974e8223d31101b24';
const private_key = 'f7d753bc12f7febd2eeef36d696653698639f0b8';
const hash = md5(ts + private_key + public_key);

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: public_key,
        hash,
    },
});

export default api;