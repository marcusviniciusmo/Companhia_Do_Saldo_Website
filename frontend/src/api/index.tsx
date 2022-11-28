import axios from 'axios';

export const ViaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    "Content-type": 'application-json'
  }
});