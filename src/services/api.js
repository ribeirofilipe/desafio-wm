import axios from 'axios';

const api = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge',
});

const local = axios.create({
  baseURL: 'http://localhost:4040'
});

export {
  api,
  local
};