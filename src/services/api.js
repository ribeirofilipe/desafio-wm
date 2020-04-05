import axios from 'axios';

const api = axios.create({
  baseURL: 'http://desafioonline.webmotors.com.br/api/OnlineChallenge',
});

const stateApi = axios.create({
  baseURL: 'http://www.geonames.org/childrenJSON?geonameId=3469034',
});

const local = axios.create({
  baseURL: 'http://localhost:4040'
});

export {
  api,
  stateApi,
  local
};