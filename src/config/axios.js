import axios from 'axios';

const client = axios.create({
    baseURL: 'https://mcgaserverfinal.herokuapp.com/api'
}) 

export default client;