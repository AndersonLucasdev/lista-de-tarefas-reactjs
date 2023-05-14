import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://test-nodejs-api.vercel.app/'
})